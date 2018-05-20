#!/usr/bin/env sh

bundle install
bundle exec pod repo update
bundle exec pod install --project-directory=ios/
brew install jq
