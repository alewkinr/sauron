import React from "react";
import { View, StyleSheet } from "react-native";

import { ScreenTitle } from "../components/ScreenTitle";
import { ScreenSubtitle } from "../components/ScreenSubtitle";
import { Text } from "../components/Themed";
import Divider from "../components/Divider";

export default function OverviewScreen() {
  return (
    <View style={styles.container}>
      {/*// todo: add search panel*/}
      <ScreenTitle>Статистика</ScreenTitle>
      {/*// todo: add buttons*/}
      <Divider />

      <ScreenSubtitle>Ресурсы</ScreenSubtitle>
      <Text>Ни для одного из ресурсов не сработало сигналов тревоги.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 16,
    top: 100,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
