/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createAppContainer, createStackNavigator } from "react-navigation";
import { NetInfo } from 'react-native'
import { TrailerContext } from "./context/TrailerContext"
import { TrailerList } from "./components/TrailerList"
import { TrailerScreen } from "./components/TrailerScreen"

class App extends Component {

  constructor(props) {
    super(props);

    this.navigateToDetails = (trailer) => {
      this.props.navigation.navigate('Trailer', { trailer: trailer })
    }
    this.state = {
      isConnected: false,
      navigateToDetails: this.navigateToDetails
    };
    console.log(this.state.isConnected);
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }

  static navigationOptions = {
    title: 'Liste de films'
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectivityChange);
  }

  _handleConnectivityChange = isConnected => {
    console.log(isConnected);
    this.setState({ isConnected: isConnected });
  }

  render() {
    return (
      <TrailerContext.Provider value={this.state}>
        <View style={(this.state.isConnected) ? ({...styles.container, backgroundColor: '#1093af'}) : ({...styles.container, backgroundColor: '#BC4132'})}>
          {
            (this.state.isConnected) ? (
              <TrailerList />
            ) : (
              <Text style={{fontSize: 30, color:'black'}}>Pas de connection</Text>
            )
          }
          
        </View>
      </TrailerContext.Provider>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: App },
  Trailer: { screen: TrailerScreen }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
