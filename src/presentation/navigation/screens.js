// @flow strict

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';

import { App } from '../components/App';

export const SCREENS = {
  HOME: `navigation.playground.WelcomeScreen`,
};

export const registerScreens = () => {
  const store = getStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(App, store, Provider),
  );
};
