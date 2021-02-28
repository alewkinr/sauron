import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import EventScreen from "./EventScreen";
import {useState} from "react";
import SearchIconSvg from "../components/SearchIconSvg";

export default function TabThreeScreen() {
    const [searchField, setSearchField] = useState('')


    return (
        <View style={styles.container}>
            <View style={{
                elevation: 1,
                shadowOffset: {width: 1, height: 6},
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowRadius: 10,
                shadowOpacity: 1,
                marginLeft: -5,
                marginRight: -5,
                marginTop: 10,
                backgroundColor: '#fff',
                position: "relative",
            }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Поиск по ключевым словам"
                    value={searchField}
                    placeholderTextColor={"#C1C1C1"}
                    onChangeText={setSearchField}
                />
                <SearchIconSvg width={18} height={18} style={{position: "absolute", left: 25, top: 15}}/>
            </View>
            <EventScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textInput: {
        fontFamily: "SBSansDisplay",
        width: "100%",
        fontSize: 16,
        color: "#000",
        paddingLeft: 50,
        paddingVertical: 7,
        height: 53,

    },
});
