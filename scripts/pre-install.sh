#!/usr/bin/env sh

# CI ENVIRONMENT
if [[ "$CI" != "" ]];
  then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # MACOS CI ENVIRONMENT
    brew install jq
  else
    # NON MACOS CI ENVIRONMENT
    sdkmanager --list
    yes | sdkmanager "platforms;android-27"
    yes | sdkmanager "build-tools;27.0.3"
  fi
fi

. ~/.nvm/nvm.sh
nvm install
nvm use
npm install -g "npm@$(jq -r '.engines.npm' package.json)"
