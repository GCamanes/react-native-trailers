import { AsyncStorage } from "react-native"

const KEY_TRAILERS = 'listTrailers';

export const _storeData = async (data) => {
    try {
        await AsyncStorage.setItem(KEY_TRAILERS, JSON.stringify(data));
    } catch (error) {
        // Error saving data
    }
}

export const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem(KEY_TRAILERS);
        if (value !== null) {
            return(JSON.parse(value));
        }
    } catch (error) {
        // Error retrieving data
    }
}