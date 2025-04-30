import { useEffect, useState } from "react";
import testRsyncDotShFile from './code/test_rsync/test_rsync.sh';
import runMeDotShFile from './code/test_rsync/run_me.sh';
import runMeDotTxtFile from './code/test_rsync/run_me.txt';

export default function AvoidRsyncDisaster() {
  const fetchFileAndSetState = (file, setStateFn) => {
    return () => {
      fetch(file)
        .then(r => r.text())
        .then(r => {
          r = r.replace(/[\r?\n]/g, '<br>');
          r = r.replace(/[ ]/g, '&nbsp;');
          setStateFn(r);
        });
    }
  }
  let [testRsyncDotSh, setTestRsyncDotSh] = useState('Loading');
  let [runMeDotSh, setrunMeDotSh] = useState('Loading');
  let [runMeDotTxt, setrunMeDotTxt] = useState('Loading');

  useEffect(fetchFileAndSetState(testRsyncDotShFile, setTestRsyncDotSh), []);
  useEffect(fetchFileAndSetState(runMeDotShFile, setrunMeDotSh), []);
  useEffect(fetchFileAndSetState(runMeDotTxtFile, setrunMeDotTxt), []);
  useEffect(function() {
    const intv = setInterval(() => {
      if (window?.PR?.prettyPrint && typeof window.PR.prettyPrint === 'function') {
        if (testRsyncDotSh !== 'Loading' && runMeDotSh !== 'Loading' && runMeDotTxt !== 'Loading') {
          window.PR.prettyPrint();
          clearInterval(intv);
        }
      }
    }, 50);
  }, [testRsyncDotSh, runMeDotSh, runMeDotTxt]);
  return <>
    <title>Avoid rsync Disaster</title>
    <header className="section">
      <h1>
        Avoid rsync Disaster
      </h1>
    </header>
    <div className="section">
      <h3>Does trailing slash ("/") make a difference?</h3>
      <p>
        Often times a trailing slash ("/") does not make a difference
        when referring to directories in Linux commands.
      </p>
      <p>
        However, there are times when we do need to be careful about trailing slashes,
        e.g. when supplying paths to be concatenated with file names,
        we know a slash would probably be needed
        (for instance, in Python, use os.path.join instead of path + filename to generate a full path).
        Besides path construction errors, the existence of a trailing slash can trigger a different action
        to be taken by the command.
      </p>
      <p>
        Specifying files and directories to be ignored by Git in .gitignore is one example,
        but that's another story.
        Today we're having a look at the arguments for the Linux command rsync.
      </p>
      <p>
        rsync is often used in the back up process, e.g when we want to make two directories identical to each other.
        Note if there are deleted files in the source folder,
        rsync will not delete them unless you set the "--delete" parameter.
      </p>

      <h3>The most important take-away lesson:</h3>
      <p>
        Please always do a dry run (with "-n") first if "--delete" is specified in the rsync command.
        Remove only the "-n" for the actual run.
      </p>

      <h3>Wait and make sure there are no surprises</h3>
      <p>
        When backing up large file systems,
        a cautious engineer would monitor the rsync process at least for a few initial seconds/minutes,
        and be ready to abort if something does not look right, before leaving for lunch.
        For instance, if one sees in the output terminal that things supposed to
        be left alone are being trashed, he can abort immediately to minimize the loss.
      </p>

      <h3>Double check where you are before rm -rf</h3>
      <p>
        As a side note, whenever issuing destructive commands like "rm -rf",
        please double check the host and directory.
        It's too often that people accidentaly delete the good copies when their intention is to delete the messed-up ones instead.
      </p>
      <h3>To slash or not to slash</h3>
      <p>
        In rsync, trailing slashes do matter. If we're not careful with it,
        especially when combined with the usage of "--delete", we can end up deleting stuff
        in the destination. If rsync finds in destination files that don't exist in the source,
        it will believe they should be deleted, since "--delete" is specified. And it's just doing its
        job of making sure the destination looks exactly the same as the source, no more, no less,
        as specified.
      </p>
      <p>
        So here comes the question, how to avoid such mistakes? One safe solution is to create a temp
        directory at the destination, and supply that temp directory as the destination to rsync. In this way we can be sure
        nothing is in the destination directory and we have nothing to lose. The downside is
        we may need to move things out of this temp directory afterwards.
      </p>
      <p>
        If we want to sync into the desired location in one go,
        we need to understand how the source and destination arguments
        passed to rsync are interpreted.
      </p>
      <p>Below is a little test script to compare the four
        combinations of with/without a trailing slash at the end of source/destination arguments.
      </p>
      <p>
        Everything happens in a test directory, which contains a src directory and a dst directory.
        Inside src there are two blank files a.txt and b.txt.
        Inside dst there is a blank file c.txt.
      </p>
      <p>
        The four variants of rsync commands are issued to rsync src to dst.
        An additional test with "--delete" specified, which could result in the deletion of c.txt
        in dst is included at the end.
      </p>
      <p>
        The test directory is reset to its inital status after each run of rsync.
        The before vs. after tree structure of the directories are printed out for examination.
      </p>
      <p>
        Huge thanks to @ThirtySomething for adding the hidden file cases.
      </p>
      <div>
        <p>test_rsync.sh</p>
        <code className="prettyprint linenums">
          <div dangerouslySetInnerHTML={{ __html: testRsyncDotSh }} />
        </code>
      </div>
      <div>
        <p>run_me.sh</p>
        <code className="prettyprint linenums">
          <div dangerouslySetInnerHTML={{ __html: runMeDotSh }} />
        </code>
      </div>
      <div>
        <p>run_me.txt</p>
        <code className="prettyprint linenums">
          <div dangerouslySetInnerHTML={{ __html: runMeDotTxt }} />
        </code>
      </div>
      <p>
        We can see from the output, a trailing slash at the end of src does make a difference,
        whereas it doesn't matter at the end of dst.
        When there is no slash at the end of src, rsync will place the entire src folder under the dst directory,
        where as when there is a trailing slash at the end of src, rsync will sync the contents of src and place them
        under the dst directory. The latter case is where files in the destination directory can be deleted
        if "--delete" flag is specified to rsync, as shown in the last example.
      </p>
    </div>

  </>

}
