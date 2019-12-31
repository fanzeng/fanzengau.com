#!/usr/bin/env bash
test_rsync_dir=test_rsync_dir
src=$test_rsync_dir/src
dst=$test_rsync_dir/dst

function init {
	printf "%50s\n\n\n" | tr " " "="
	printf "%50s\n" | tr " " "="
	echo 'creating rsync test directories'
	rm -r $test_rsync_dir 2>&1
	mkdir -p $src
	mkdir -p $dst
	touch $src/a.txt
	touch $src/b.txt
	touch $dst/c.txt
	echo 'initial directory tree:'
	tree
}

init && \
echo 'no slash in src and no slash in dst' && \
rsync -av $src $dst && \
echo 'directory tree after sync:'
tree

init && \
echo 'slash in src and no slash in dst' && \
rsync -av $src/ $dst && \
echo 'directory tree after sync:'
tree

init && \
echo 'no slash in src and slash in dst' && \
rsync -av $src $dst/ && \
echo 'directory tree after sync:'
tree

init && \
echo 'slash in src and dst' && \
rsync -av $src/ $dst/ && \
echo 'directory tree after sync:'
tree

init && \
echo 'slash in src and --delete specified' && \
rsync -av --delete $src/ $dst/ && \
echo 'directory tree after sync:'
tree