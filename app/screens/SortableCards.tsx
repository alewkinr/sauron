import * as React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {Value} from "react-native-reanimated";

import {BLOCK_COLUMNS, BLOCK_SIZE_H, blocks} from "../components/Blocks";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1d1e"
    },
});
export default () => {
    const offsets = blocks.map((_, index) => ({
        x: new Value(0),
        y: new Value(Math.floor(index / BLOCK_COLUMNS) * BLOCK_SIZE_H),
    }));

    const {signOut} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => signOut()}
                style={styles.buttonStyle}>
                <Text style={{fontSize: 16, color: '#3E03E9'}}>Войти</Text>
            </TouchableOpacity>
            {/*{blocks.map((block, index) => (*/}
            {/*    // <SortableBlock key={block.id} {...{ block, index, offsets }} />*/}
            {/*))}*/}

        </View>
    )
}