import React from "react";
import { TextInput } from "react-native";

import { View } from "../Themed";

import styles from "./styles";
import { SearchInputProps } from "./SearchInput";

export function SearchInputView(props: SearchInputProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => props.onChangeText(text)}
        autoCorrect={false}
      />
    </View>
  );
}
