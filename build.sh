rm -f ../export/index.html
cd script_files
npx esbuild index.js --bundle --minify --outfile=../src/meta/typeScriptMain.js --global-name=mainScript

# make crumblingcastle globally accessible
# from https://stackoverflow.com/questions/64806255/how-to-expose-a-class-to-the-global-scope-with-esbuild
echo "window.mainScript = mainScript;" >> ../src/meta/typeScriptMain.js

cd ../src
npx ifc -o ../export/index.html

# insert contents of addToHead.html into head of export/index.html, before line containing "<title>"
# from https://unix.stackexchange.com/a/32912
cd ..
sed -n -i -e '/<title>/r addToHead.html' -e 1x -e '2,${x;p}' -e '${x;p}' export/index.html