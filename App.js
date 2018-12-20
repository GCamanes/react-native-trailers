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

import { TrailerScreen } from "./components/TrailerScreen"

const urlAPITrailers = 'http://192.168.10.48:8080/trailers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { films: [] };
  }

  _keyExtractor = (item, index) => item.title;
  _renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => { this.props.navigation.navigate('Trailer', {title:item.title}) }}>
      <Text>{item.title}</Text>
    </TouchableHighlight>
  );

  componentDidMount() {
    fetch(urlAPITrailers)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      console.debug(response);
      this.setState({
        films: response
      });
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.films.length}</Text>
        <FlatList
          data={this.state.films}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
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
