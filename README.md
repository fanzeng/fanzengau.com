# fanzengau.com
master
[![Netlify Status](https://api.netlify.com/api/v1/badges/e210e9b2-2861-4b4f-9632-aeca29c0670b/deploy-status?branch=master)](https://app.netlify.com/sites/fanzengau/deploys) &nbsp;&nbsp;
dev
[![Netlify Status](https://api.netlify.com/api/v1/badges/677552a2-b9f8-4069-ab7a-06e46961b4ab/deploy-status?branch=dev)](https://app.netlify.com/sites/epicbeaver/deploys)


# in client/fanzengau-app
# build
npm run build
# start
npm run start

# deploy
cp -r ../../submodules/ build/ && ./node_modules/.bin/netlify deploy --prod

# install netlify-cli
npm install netlify-cli --save-dev
