// @flow strict

import { registerListeners } from './listeners';
import { registerScreens } from './screens';

export const initializeNavigation = () => {
  registerScreens();
  registerListeners();
};
