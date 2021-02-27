import React from "react";
import { Line } from "react-chartjs-2";

import { View } from "../Themed";

import styles from "./styles";
import { ChartProps, ChartTypes } from "./Chart";

// customSizeOpt — получаем опцию для рендера чарта с кастомными шириной и высотой
const customSizeOpt = (props: ChartProps) => {
  return (props.height || props.width) && { maintainAspectRatio: false };
};

export function ChartView(props: ChartProps): JSX.Element {
  switch (props.type) {
    case ChartTypes.line:
      return (
        <View style={styles.container}>
          <Line
            data={props.data.line}
            width={props.width}
            height={props.height}
          />
          options={customSizeOpt(props)}
        </View>
      );
    case ChartTypes.bar:
      break;
    case ChartTypes.radar:
      break;
    case ChartTypes.pie:
      break;
    case ChartTypes.parea:
      break;
    case ChartTypes.bubble:
      break;
    case ChartTypes.scatter:
      break;
    case ChartTypes.area:
      break;
    case ChartTypes.mixed:
      break;
    default:
      break;
  }

  throw new Error("undefined chart type");
}
