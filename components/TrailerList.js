import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, FlatList } from 'react-native';

import { TrailerContext } from "../context/TrailerContext"
import { TrailerListItem } from "./TrailerListItem"
import { TrailerScreen } from "./TrailerScreen"

const urlAPITrailers = 'http://192.168.10.48:8080/trailers';

export class TrailerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { films: [] };
    }

    _keyExtractor = (item, index) => item.title;
    _renderItem = ({ item }) => (
        <TrailerListItem trailer={item} />
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
                list = response.sort((a, b) => a.title < b.title);
                this.setState({
                    films: list
                });
            }).catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ width: '100%', flex: 1 }}>
                <View style={styles.trailerListTextView}>
                    <Text style={styles.trailerListText}>Films disponible : {this.state.films.length}</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.films}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    trailerListTextView: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    trailerListText: {
        fontSize: 20,
        color: 'black'
    }
});