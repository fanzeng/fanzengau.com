#!/usr/bin/env bash
test_rsync_dir=test_rsync_dir
src=$test_rsync_dir/src
dst=$test_rsync_dir/dst

function init {
	printf "%60s\n\n\n" | tr " " "="
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

case_num=0

rsync_command='rsync -av $src $dst'
((case_num++))
init && \
printf "%50s\n" | tr " " "-" && \
echo "Case $case_num: no slash in src and no slash in dst" && \
echo $rsync_command && \
printf "%50s\n" | tr " " "-" && \
eval $rsync_command && \
echo 'directory tree after sync:' && \
tree

rsync_command='rsync -av $src/ $dst'
((case_num++))
init && \
printf "%50s\n" | tr " " "-" && \
echo "Case $case_num: slash in src and no slash in dst" && \
echo $rsync_command && \
printf "%50s\n" | tr " " "-" && \
eval $rsync_command && \
echo 'directory tree after sync:' && \
tree

rsync_command='rsync -av $src $dst/'
((case_num++))
init && \
printf "%50s\n" | tr " " "-" && \
echo "Case $case_num: no slash in src and slash in dst" && \
echo $rsync_command && \
printf "%50s\n" | tr " " "-" && \
eval $rsync_command && \
echo 'directory tree after sync:' && \
tree

rsync_command='rsync -av $src/ $dst/'
((case_num++))
init && \
printf "%50s\n" | tr " " "-" && \
echo "Case $case_num: slash in src and dst" && \
echo $rsync_command && \
printf "%50s\n" | tr " " "-"
eval $rsync_command && \
echo 'directory tree after sync:' && \
tree

rsync_command='rsync -av --delete $src/ $dst/'
((case_num++))
init && \
printf "%50s\n" | tr " " "-" && \
echo "Case $case_num: slash in src and --delete specified" && \
echo $rsync_command && \
printf "%50s\n" | tr " " "-" && \
eval $rsync_command && \
echo 'directory tree after sync:' && \
tree