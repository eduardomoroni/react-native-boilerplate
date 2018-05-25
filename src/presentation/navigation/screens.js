import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { createStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';

import { App } from '../components/App';

export const SCREENS = {
  HOME: `navigation.playground.WelcomeScreen`,
};

export const registerScreens = () => {
  const store = createStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(App, store, Provider),
  );
};
