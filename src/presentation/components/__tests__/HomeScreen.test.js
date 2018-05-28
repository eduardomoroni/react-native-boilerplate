// @flow

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { HomeScreen, HomeContainer } from '../HomeScreen';
import { Home } from '../Home';
import { incrementCounter, decrementCounter } from '../../redux/counter';

const mockStore = configureStore();
const state = { counter: 2 };
const store = mockStore(state);

//TODO: Simplify this
//https://jsramblings.com/2018/01/15/3-ways-to-test-mapStateToProps-and-mapDispatchToProps.html
describe('<HomeScreen />', () => {
  it('should inject props into container', () => {
    const wrapper = shallow(<HomeScreen store={store} />);
    const container = wrapper.find(HomeContainer);

    expect(container.prop('counter')).toEqual(state.counter);

    container.prop('increment')();
    expect(store.getActions()).toEqual([incrementCounter()]);
    store.clearActions();

    container.prop('decrement')();
    expect(store.getActions()).toEqual([decrementCounter()]);
    store.clearActions();
  });
});

describe('<HomeContainer />', () => {
  const props = {
    decrement: jest.fn(),
    increment: jest.fn(),
    counter: 1,
  };

  it('should pass props correctly to <Home />', () => {
    const wrapper = shallow(<HomeContainer {...props} />);
    const component = wrapper.find(Home);

    const homeProps = component.props();
    expect(homeProps.decrement).toEqual(props.decrement);
    expect(homeProps.increment).toEqual(props.increment);
    expect(homeProps.counter).toEqual(props.counter);
  });
});
