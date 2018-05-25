import { initializeI18n } from './i18n';
import { initializeNavigation } from './navigation';

export const PresentationLayer = () => {
  initializeI18n();
  initializeNavigation();
};
