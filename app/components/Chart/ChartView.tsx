import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

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
            data={{
              labels: props.labels,
              datasets: [
                {
                  label: props.title,
                  data: props.data.line,
                  fill: props.fill === true,
                  backgroundColor: "black", // todo: set default color
                  pointHoverRadius: 4,
                  borderWidth: 2,
                  radius: 2,
                },
              ],
            }}
            width={props.width}
            height={props.height}
            options={customSizeOpt(props)}
          />
        </View>
      );
    case ChartTypes.bar:
      break;
    case ChartTypes.radar:
      break;
    case ChartTypes.pie:
      break;
    case ChartTypes.doughnut:
      return (
        <View style={styles.container}>
          <Doughnut
            data={{
              labels: props.labels,
              datasets: [
                {
                  label: props.title,
                  data: props.data.doughnut,
                  backgroundColor: "black", // todo: set default color
                  pointHoverRadius: 4,
                  borderWidth: 2,
                  radius: 2,
                },
              ],
            }}
            width={props.width}
            height={props.height}
            options={customSizeOpt(props)}
          />
        </View>
      );
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
