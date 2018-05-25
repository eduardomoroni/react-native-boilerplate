# https://github.com/wix/react-native-navigation/issues/3019
RCTFONT_PATH = ./ios/build/Build/Products/Debug-iphonesimulator/include/React/./ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTFont.h

rm -f "$RCTFONT_PATH"
cp scripts/workaround/RCTFont.h "$RCTFONT_PATH"
