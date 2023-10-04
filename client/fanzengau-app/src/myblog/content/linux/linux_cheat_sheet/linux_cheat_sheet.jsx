export function LinuxCheatSheet() {
  return <>
    <title>Linux Cheat Sheet</title>
    <header className="section">
      <h1>Linux Cheat Sheet</h1>
      <p>Summarised for and tested on Ubuntu 16.04, YMMV</p>
    </header>
    <div className="section">
      <h2>Admin</h2>

      <h3>add a user</h3>
      <pre className="prettyprint linenums">adduser fzeng</pre>
      <p>Don't use useradd, it's deprecated.</p>

      <h3>Add the newly created user to sudo group</h3>
      <pre className="prettyprint linenums">usermod -aG sudo fzeng</pre>

      <h3>Become a normal user from root</h3>
      <pre className="prettyprint linenums">su - fzeng</pre>

      <h3>Delete the user</h3>
      <pre className="prettyprint linenums">userdel fzeng</pre>

      <h3>View ssh login history</h3>
      <pre className="prettyprint linenums">cat /var/log/auth.log</pre>

      <h3>Install mysql</h3>
      <pre className="prettyprint linenums">sudo apt-get install mysql-server</pre>

      <h3>Find what process is using a port</h3>
      <pre className="prettyprint linenums">lsof -i :portNumber</pre>
    </div>

    <div className="section">
      <h2>Files</h2>
      <h3>zip a directory</h3>
      <pre className="prettyprint linenums">zip -r result.zip dir_to_zip</pre>
      <p>Not to be confused with
        <pre className="prettyprint linenums">gzip -r</pre>
        it will traverse recursively all sub-directories and create a zip for every file.</p>
      <p>If you have accidentally executed that, just run
        <pre className="prettyprint linenums">gunzip -r</pre>
        to reverse it.
      </p>
      <h3>create a symbolic link</h3>
      <pre className="prettyprint linenums">ln -s the_file_the_symbolic_link_should_point_to the_symbolic_link_itself</pre>
    </div>
  </>
}