import {Dimensions, Text, StyleSheet, View} from "react-native";
import * as React from "react";

interface Block {
    id: number,
    name: string,
    img: string
}

export const BLOCK_COLUMNS = 1;
export const BLOCK_SIZE = Dimensions.get("window").width / BLOCK_COLUMNS;

export const block: Block[] = [
    {
        id: 1,
        name: "First",
        img: 'img1.jpg'

    },
    {
        id: 2,
        name: "Second",
        img: 'img2.jpg'
    },
    {
        id: 3,
        name: "Third",
        img: 'img3.jpg'
    },
    {
        id: 4,
        name: "Forth",
        img: 'img1.jpg'
    },

]

const styles = StyleSheet.create({
    container: {width: BLOCK_SIZE, height: BLOCK_SIZE},
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 16,
        margin: 16,
    },
});

export interface BlockProps {
    block: Block;
}

export default ({block: {name}}: BlockProps) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
};