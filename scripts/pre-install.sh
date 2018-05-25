#!/usr/bin/env sh

nvm install
nvm use
npm install -g "npm@$(jq -r '.engines.npm' package.json)"
# CONFIGURAR RVM
