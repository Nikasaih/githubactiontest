rm -rf build
mkdir -p build
mkdir -p build/front

sh makeSync.sh

cd front
npm install
npm run build
mv -f build/ ../build/front/web

cd ../back
npm install
npm run build
mv -f dist/ ../build/back
