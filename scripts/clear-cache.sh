#!/usr/bin/env sh

watchman watch-del-all
rm -rf ios/build
rm -rf ios/Pod
rm -rf android/build
rm -rf /tmp/haste-map-react-native-packager-*
rm -rf /tmp/metro-bundler-cache-*
cd ios
