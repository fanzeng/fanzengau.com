# fanzengau.com

# in client/fanzengau-app
# build
npm run build
# start
npm run start

# deploy
cp -r ../../submodules/ build/ && ./node_modules/.bin/netlify deploy --prod