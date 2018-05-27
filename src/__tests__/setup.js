// http://airbnb.io/enzyme/docs/guides/react-native.html
// import 'react-native-mock/mock';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
