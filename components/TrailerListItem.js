import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

import { TrailerContext } from "../context/TrailerContext"

export class TrailerListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TrailerContext.Consumer>
                {
                    ({ navigateToDetails }) => {
                        return (
                            <TouchableHighlight onPress={() => navigateToDetails(this.props.trailer)}>
                                <View style={styles.trailerItemView}>
                                    <Text style={styles.trailerText}>{this.props.trailer.title}</Text>
                                    <Image
                                        style={styles.trailerImg}
                                        source={{ uri: this.props.trailer.poster }}
                                    />
                                </View>
                            </TouchableHighlight>
                        );
                    }
                }
            </TrailerContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    trailerItemView: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        margin: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius: 5,
    },
    trailerText: {
        flex: 1,
        marginStart: 10,
        fontSize: 18,
        color: 'black'
    },
    trailerImg: {
        width: 45,
        height: 70,
        margin: 5
    } 
});