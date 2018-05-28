// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { HomeScreen, HomeContainer } from '../HomeScreen';
import { Home } from '../Home';
import {
  incrementCounter,
  decrementCounter,
  selectCounter,
} from '../../redux/counter';
import { state, store } from '../../redux/__mocks__';

describe('<HomeScreen />', () => {
  describe('react-redux connection', () => {
    const wrapper = shallow(<HomeScreen store={store} />);
    const container = wrapper.find(HomeContainer);

    it('should map state to props', () => {
      expect(container.prop('counter')).toEqual(selectCounter(state));
    });

    it('should map dispatch to props', () => {
      container.prop('increment')();
      expect(store.getActions()).toContainEqual(incrementCounter());

      container.prop('decrement')();
      expect(store.getActions()).toContainEqual(decrementCounter());
    });
  });
});

describe('<HomeContainer />', () => {
  const props = {
    decrement: jest.fn(),
    increment: jest.fn(),
    counter: 1,
  };
  const wrapper = shallow(<HomeContainer {...props} />);
  const component = wrapper.find(Home);

  it('should pass props correctly to <Home />', () => {
    const homeProps = component.props();
    expect(homeProps.decrement).toEqual(props.decrement);
    expect(homeProps.increment).toEqual(props.increment);
    expect(homeProps.counter).toEqual(props.counter);
    expect(homeProps.instructions).toBeTruthy();
  });
});
