#!/usr/bin/env sh

openssl aes-256-cbc -K $encrypted_aff1b2d8f811_key -iv $encrypted_aff1b2d8f811_iv \
  -in travis-ci/google-services.json.enc \
  -out android/app/google-services.json -d

openssl aes-256-cbc -K $encrypted_aff1b2d8f811_key -iv $encrypted_aff1b2d8f811_iv \
  -in travis-ci/GoogleService-Info.plist.enc \
  -out ios/GoogleService-Info.plist -d

openssl aes-256-cbc -K $encrypted_84b6efd66213_key -iv $encrypted_84b6efd66213_iv \
  -in travis-ci/bitbucket_key.enc \
  -out bitbucket_key -d

eval "$(ssh-agent)"
chmod 600 bitbucket_key
ssh-add bitbucket_key
