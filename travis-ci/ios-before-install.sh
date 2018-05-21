#!/usr/bin/env sh

brew install jq
bundle install
bundle exec pod repo update
bundle exec pod install --project-directory=ios/
