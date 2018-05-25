#!/usr/bin/env sh

if [ -z "$CI" ]
then
  nvm install
  nvm use
  npm install -g "npm@$(jq -r '.engines.npm' package.json)"
# CONFIGURAR RVM
else
    echo "Skipping Pre install on CI Environment"
fi
