// @flow strict

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';
import { HomeScreen } from '../components/HomeScreen';

export const SCREENS = {
  HOME: `navigation.playground.WelcomeScreen`,
};

export const registerScreens = () => {
  const store = getStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(HomeScreen, store, Provider),
  );
};
