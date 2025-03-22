# build command format is
# bash build.sh

set -e
#The above command is to fail build if any one of the below build steps fail

buildFolder=dist

rm -rf $buildFolder
mkdir $buildFolder

cp package.json $buildFolder
cp -r src/* $buildFolder
cd $buildFolder
npm i --omit=dev
zip -r express-app.zip .