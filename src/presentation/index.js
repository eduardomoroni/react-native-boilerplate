// @flow strict

import { initializeI18n } from './i18n';
import { initializeNavigation } from './navigation';

export const PresentationLayer = (): void => {
  initializeI18n();
  initializeNavigation();
};
