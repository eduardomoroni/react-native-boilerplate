#!/usr/bin/env bash
set -o xtrace

LOG_FILE="/tmp/android_emulator.log"

EMULATOR_PORT=9999
ADB_COMMAND="$ANDROID_HOME/platform-tools/adb -s emulator-$EMULATOR_PORT"

ANDROID_SDK_ID="system-images;android-25;google_apis;x86"
ANDROID_AVD_NAME="TEST_AVD"

function verify_environment {
  if [ -z "$ANDROID_HOME" ]; then
      echo "ANDROID_HOME environment variable not set"
      exit 1
  fi

  if [ -z "$ANDROID_AVD_NAME" ]; then
      echo "ANDROID_AVD_NAME environment variable not set"
      exit 1
  fi
}

function launch_emulator {
  local params="-no-snapshot -no-audio"

  if [[ "$CI" != "" ]]; then
    params+=" -no-window"
  fi

  $ANDROID_HOME/emulator/emulator $params \
    -port $EMULATOR_PORT -avd $ANDROID_AVD_NAME > $LOG_FILE 2>&1 &
}

function wait_for_emulator {
  set +o xtrace
  local retries=1
  local max_retries=240

  while [ "`$ADB_COMMAND shell getprop sys.boot_completed | tr -d '\r'`" != "1" ] ;
  do
    if [[ $retries -lt $max_retries ]]; then
      ((retries++))
      sleep 1;
    else
      echo "Emulator failed to start."
      exit 1
    fi
  done
}

function kill_emulator {
  $ADB_COMMAND emu kill
}

function create_avd {
  echo 'Creating Android Virtual Device'
  $ANDROID_HOME/tools/bin/sdkmanager $ANDROID_SDK_ID
  echo no | $ANDROID_HOME/tools/bin/avdmanager create avd --force \
      --name $ANDROID_AVD_NAME -k $ANDROID_SDK_ID
}

function run {
  case $1 in
    start)
        verify_environment
        launch_emulator
        wait_for_emulator
      ;;
    stop)
        kill_emulator
      ;;
    create)
        verify_environment
        create_avd
      ;;
    *)
      echo "Arguments: {start|stop|create}"
  esac

  exit 0
}

run $1
