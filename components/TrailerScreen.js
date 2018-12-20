import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export class TrailerScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.navigation.getParam('title', 'pas de trailer')
        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Trailer : {this.state.title}</Text>
            </View>
        );
    }
}