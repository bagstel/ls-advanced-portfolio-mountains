#!/usr/bin/env sh

## abort on errors
set -e

## build
npm run build

## navigate into the build output directory
cd dist

## if you are deploying to a custom domain
echo 'ls-advanced-portfolio-mountains.psd-to.site' > CNAME

git init
git add -A
git commit -m 'deploy'

## if you are deploying to https://<USERNAME>.github.io
# git add remote origin https://github.com/<USERNAME>/<REPO>.git
# git push -f origin master

## if you are deploying to https://<USERNAME>.github.io/<REPO>
git remote add origin https://github.com/bagstel/ls-advanced-portfolio-mountains.git
git push -f origin master:gh-pages

cd -

## https://cli.vuejs.org/guide/deployment.html#github-pages