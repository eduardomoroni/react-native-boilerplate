#!/usr/bin/env sh

bundle install
bundle exec pod install --project-directory=ios/
echo 'DO NOT FORGET TO SETUP GOOGLE SECRETS ON BOTH ANDROID AND IOS'
