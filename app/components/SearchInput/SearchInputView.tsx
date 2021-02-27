import React, { Component } from "react";
import { PropType } from "prop-types";

import { View } from "../Themed";

import { SearchInputItem } from "./children/Item";
import styles from "./styles";
import { SearchInputProps } from "./SearchInput";

export function SearchInputView(props: SearchInputProps): JSX.Element {
    
    const render
    
  return (
    <View style={styles.container}>
      <Component { {...this.props}, {...TextInput.propTypes}} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => props.onChangeText(text)}
        autoCorrect={false}
        renderItem={(item, i) => {
          <SearchInputItem
            onPress={(item) => {
              console.log(item);
            }}
            value={item}
          />;
        }}
      />
    </View>
  );
}
