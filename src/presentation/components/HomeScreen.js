// @flow strict

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import { incrementCounter, decrementCounter } from '../redux/counter';
import { Home } from './Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  decrement: () => void,
  increment: () => void,
  counter: number,
};

export class HomeContainer extends Component<Props> {
  render() {
    return (
      <Home
        increment={this.props.increment}
        decrement={this.props.decrement}
        counter={this.props.counter}
        instructions={instructions}
      />
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(
  HomeContainer,
);
