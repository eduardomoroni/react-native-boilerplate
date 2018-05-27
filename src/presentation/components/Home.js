// @flow strict

import Config from 'react-native-config';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import { styles } from './Home.styles';

type Props = {
  decrement: () => void,
  increment: () => void,
  instructions: string,
  counter: number,
};

export const Home = (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {`${I18n.t('greeting')} Welcome to React Native!`}
    </Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{`This is a secret ${Config.TEST}`}</Text>
    <Text style={styles.instructions}>{props.instructions}</Text>
    <Icon name="rocket" size={30} color="#900" />
    <Text style={styles.instructions}>{props.counter}</Text>
    <Button onPress={props.increment} title="INCREMENT" color="#841584" />
    <Button onPress={props.decrement} title="DECREMENT" color="#841584" />
  </View>
);
