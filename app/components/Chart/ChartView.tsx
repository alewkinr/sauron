import React from "react";
import { Bar } from "react-chartjs-2";

import { View } from "../Themed";

import styles from "./styles";
import { ChartProps } from "./Chart";

export function ChartView(props: ChartProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Bar
        data={props.data}
        width={props.width}
        height={props.height}
        options={() => {
          return (
            (props.height || props.width) && { maintainAspectRatio: false }
          );
        }}
      />
    </View>
  );
}
