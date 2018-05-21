#!/usr/bin/env sh
# https://docs.travis-ci.com/user/encrypting-files/

echo "Decrypting bitbucket ssh key..."
openssl aes-256-cbc -K $encrypted_84b6efd66213_key \
  -iv $encrypted_84b6efd66213_iv \
  -in travis-ci/bitbucket_key.enc \
  -out bitbucket_key -d

eval "$(ssh-agent)"
chmod 600 bitbucket_key
ssh-add bitbucket_key

echo "Cloning secrets repository..."
REPO_SSH_URL="git@bitbucket.org:eduardomoroni/trading-card-manager-secrets.git"
SECRETS_PATH="trading-card-manager-secrets/secrets"
git clone --depth 1 "$REPO_SSH_URL"
mv "$SECRETS_PATH/google-services.json" android/app/google-services.json
mv "$SECRETS_PATH/GoogleService-Info.plist" ios/GoogleService-Info.plist
mv "$SECRETS_PATH/secrets/.env" .env
