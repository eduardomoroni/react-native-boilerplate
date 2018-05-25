import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens'

export const registerListeners = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: SCREENS.HOME,
        },
      },
    });
  });
}
