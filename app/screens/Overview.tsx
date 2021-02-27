import React from "react";
import { View, StyleSheet } from "react-native";

import { ScreenTitle } from "../components/ScreenTitle";
import { ScreenSubtitle } from "../components/ScreenSubtitle";
import { Text } from "../components/Themed";
import Divider from "../components/Divider";
import { ResourceCardView } from "../components/ResourceCard/ResourceCardView";
import { Chart, ChartTypes } from "../components/Chart/index";

export default function OverviewScreen() {
  return (
    <View style={styles.container}>
      {/*// todo: add search panel*/}
      <ScreenTitle>Статистика</ScreenTitle>
      {/*// todo: add buttons*/}
      <Divider />

      <ScreenSubtitle>Ресурсы</ScreenSubtitle>
      <Text>
        Ни для одного из ресурсов не сработало никаких сигналов тревоги
      </Text>
      {/*<ResourceCardView*/}
      {/*  title={"test"}*/}
      {/*  resources={[*/}
      {/*    {*/}
      {/*      id: "1",*/}
      {/*      amount: 2,*/}
      {/*      alerts: 0,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      <Chart
        type={ChartTypes.line}
        height={200}
        data={{
          labels: ["1", "2", "3"],
          datasets: [
            {
              data: [1, 2, 3, 4],
            },
          ],
        }}
      />
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
