fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios clean
```
fastlane ios clean
```
Clean project medatata
### ios certificates
```
fastlane ios certificates
```
Fetch certificates and provisioning profiles
### ios build
```
fastlane ios build
```
Build the iOS application.
### ios test_build
```
fastlane ios test_build
```

### ios beta
```
fastlane ios beta
```
Push a new beta build to TestFlight

----

## Android
### android clean
```
fastlane android clean
```
Clean Android project.
### android build
```
fastlane android build
```
Build the Android application.
### android test
```
fastlane android test
```
Runs all the tests
### android deploy
```
fastlane android deploy
```
Deploy a new version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
