import React from "react";
import { StyleSheet } from "react-native";

import { Text, TextProps } from "./Themed";

const styles = StyleSheet.create({
  text: {
    fontFamily: "SBSansDisplay",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    color: "#000",
  },
});

export function ScreenSubtitle(props: TextProps) {
  return <Text {...props} style={styles.text} />;
}
