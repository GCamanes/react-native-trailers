import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export class TrailerScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trailer: this.props.navigation.getParam('trailer', 'pas de trailer')
        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Trailer : {this.state.trailer.title}</Text>
            </View>
        );
    }
}