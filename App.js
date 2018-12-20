/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, FlatList } from 'react-native';

import { createAppContainer, createStackNavigator } from "react-navigation";

import {TrailerContext} from "./context/TrailerContext"
import {TrailerList} from "./components/TrailerList"
import { TrailerScreen } from "./components/TrailerScreen"

class App extends Component {

  constructor(props) {
    super(props);

    this.navigateToDetails = (trailer) => {
      this.props.navigation.navigate('Trailer', { trailer: trailer})
    }
    this.state = {
      navigateToDetails: this.navigateToDetails
    };
  }

  render() {
    return (
      <TrailerContext.Provider value={this.state}>
        <View style={styles.container}>
          <TrailerList />
        </View>
      </TrailerContext.Provider>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },
  Trailer: {
    screen: TrailerScreen
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
