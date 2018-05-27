let I18n = jest.mock('react-native-i18n');

I18n.t = jest.fn(text => `I18n.t(${text})`);
I18n.currentLocale = jest.fn(() => 'en');

export default I18n;
