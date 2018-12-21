import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class TrailerScreen extends React.Component {

    static navigationOptions = {
        title: 'Details du film'
    }

    constructor(props) {
        super(props);

        this.state = {
            trailer: this.props.navigation.getParam('trailer', 'pas de trailer')
        }
    }

    render() {
        return (
            <ScrollView style={{ width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 180, height: 280 }}
                        source={{ uri: this.state.trailer.poster }}
                    />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, margin: 5, color: 'black' }}>{this.state.trailer.title}</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.trailerInfosTitleView}>
                        <Text style={styles.trailerInfosTitleText}>Studio</Text>
                    </View>
                    <Text style={styles.trailerInfosText} >{this.state.trailer.studio}</Text>

                    <View style={styles.trailerInfosTitleView}>
                        <Text style={styles.trailerInfosTitleText}>Directors</Text>
                    </View>
                    <Text style={styles.trailerInfosText} >{this.state.trailer.directors}</Text>

                    <View style={styles.trailerInfosTitleView}>
                        <Text style={styles.trailerInfosTitleText}>Release Date</Text>
                    </View>
                    <Text style={styles.trailerInfosText} >{this.state.trailer.releasedate.substring(0, 16)}</Text>

                    <View style={styles.trailerInfosTitleView}>
                        <Text style={styles.trailerInfosTitleText}>Genre</Text>
                    </View>
                    {
                        this.state.trailer.genre.map((item, index) => <Text style={styles.trailerInfosText} key={"genre" + index}>{item}</Text>)
                    }

                    <View style={styles.trailerInfosTitleView}>
                        <Text style={styles.trailerInfosTitleText}>Actors</Text>
                    </View>
                    {
                        this.state.trailer.actors.map((item, index) => <Text style={styles.trailerInfosText} key={"actors" + index}>{item}</Text>)
                    }

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    trailerInfosTitleView: {
        height: 32,
        backgroundColor: 'grey',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
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
    trailerInfosTitleText: {
        fontSize: 22,
        color: 'white'
    },
    trailerInfosText: {
        fontSize: 20,
        margin: 5,
        color: 'black'
    }
});