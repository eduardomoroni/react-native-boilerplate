#!/usr/bin/env sh
# https://github.com/wix/react-native-navigation/issues/3019
RCTFONT_PATH=node_modules/react-native/React/Views/RCTFont.h

rm -f "$RCTFONT_PATH"
cp scripts/workaround/RCTFont.h "$RCTFONT_PATH"
