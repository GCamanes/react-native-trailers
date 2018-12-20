import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, TouchableHighlight, FlatList } from 'react-native';

import {TrailerContext} from "../context/TrailerContext"

export class TrailerListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <TrailerContext.Consumer>
            {
                ({navigateToDetails}) => {
                    return (
                        <TouchableHighlight onPress={() => navigateToDetails(this.props.trailer)}>
                            <Text>{this.props.trailer.title}</Text>
                        </TouchableHighlight>
                    );
                }
            }
            </TrailerContext.Consumer>
        );
    }
}