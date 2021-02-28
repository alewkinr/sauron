import * as React from "react";
import {StyleSheet} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import {Text, View} from "../components/Themed";
import UserScreen from "./UserScreen";

export default function TabFiveScreen() {
    return (
        <View style={styles.container}>
            <UserScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
