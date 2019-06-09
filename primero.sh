#|/bin/bash
echo Hola mundo
#git status

git status > tmp.txt
grep 'master' tmp.txt

#nl -b p^[E] tmp.txt

