#!/usr/bin/env sh

if [ -z "$CI" ]
then
  bundle install
  bundle exec pod install --project-directory=ios/
  echo 'DO NOT FORGET TO SETUP GOOGLE SECRETS ON BOTH ANDROID AND IOS'
  sh scripts/workaround/ios-rctfont-workaround.sh
else
  echo "Skipping post install on CI Environment"
fi
