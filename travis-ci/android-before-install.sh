#!/usr/bin/env sh

sdkmanager --list
yes | sdkmanager "platforms;android-27"
yes | sdkmanager "build-tools;27.0.3"
