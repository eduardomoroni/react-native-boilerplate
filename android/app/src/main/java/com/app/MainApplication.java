package com.app;

import android.app.Application;

import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  protected ReactNativeHost createReactNativeHost() {
    return new NavigationReactNativeHost(this) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new VectorIconsPackage(),
        new RNFirebasePackage(),
        new ReactNativeConfigPackage(),
        new RNI18nPackage());
  }
}
