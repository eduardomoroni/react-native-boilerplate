// @flow strict

import Config from 'react-native-config';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import { incrementCounter, decrementCounter } from '../redux/counter';
import { styles } from './App.styles';

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

export class AppComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`${I18n.t('greeting')} Welcome to React Native!`}
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>
          {`This is a secret ${Config.TEST}`}
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Icon name="rocket" size={30} color="#900" />
        <Text style={styles.instructions}>{this.props.counter}</Text>
        <Button
          onPress={this.props.increment}
          title="INCREMENT"
          color="#841584"
        />
        <Button
          onPress={this.props.decrement}
          title="DECREMENT"
          color="#841584"
        />
      </View>
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

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
