import React, {useState} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";

import {Text, TextProps} from "./Themed";
import RefreshIconSvg from "./RefreshIconSvg";

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: 'baseline',
        padding: 10
    },
    text: {
        fontFamily: "SBSansDisplayBold",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 30,
        lineHeight: 38,
        display: "flex",
        alignItems: "center",
        color: "#000",
    },
});



export function ScreenTitle(props: TextProps) {
    let time = `${new Date().toLocaleString('ru-RU', {hour: "2-digit"})}:${new Date().toLocaleString('ru-RU', {minute: "2-digit"})}:${new Date().toLocaleString('ru-RU', {second: "2-digit"})}`
    const [currentTime, setCurrentTime] = useState(time)

    return (
        <View style={styles.container}>
            <Text {...props} style={styles.text}/>
            <Text style={{
                fontSize: 18,
                fontFamily: "SBSansDisplay",
                color: "#C1C1C1",
                paddingHorizontal: 20
            }}>на {currentTime}</Text>
            <TouchableOpacity
                onPress={() => {
                    setCurrentTime(time)
                }}
                style={{
                    position: "relative",
                    top: 5,
                    width: 40,
                    height: 30,
                    backgroundColor: '#07E897',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <RefreshIconSvg width={16} height={16} style={{position: 'absolute'}}/>
            </TouchableOpacity>
        </View>
    );

}
