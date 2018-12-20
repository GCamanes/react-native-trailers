import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, FlatList } from 'react-native';

import {TrailerContext} from "../context/TrailerContext"
import {TrailerListItem} from "./TrailerListItem"
import { TrailerScreen } from "./TrailerScreen"

const urlAPITrailers = 'http://192.168.10.48:8080/trailers';

export class TrailerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { films: [] };
    }

    _keyExtractor = (item, index) => item.title;
    _renderItem = ({ item }) => (
        <TrailerListItem trailer={item}/>
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

    render () {
        return (
            <View>
                <Text>{this.state.films.length}</Text>
                <FlatList
                    data={this.state.films}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}