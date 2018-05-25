import { registerListeners } from './listeners';
import { registerScreens } from './screens';

export default () => {
  registerScreens();
  registerListeners();
};
