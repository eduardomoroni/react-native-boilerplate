import { Navigation } from 'react-native-navigation';
import { App } from '../App';

export const SCREENS = {
  HOME: `navigation.playground.WelcomeScreen`
}

export const registerScreens = () => {
  Navigation.registerComponent(SCREENS.HOME, () => App);
}
