import React from "react";

import { ChartView } from "./ChartView";

export enum ChartTypes {
  line,
  bar,
  radar,
  pie,
  parea,
  bubble,
  scatter,
  area,
  mixed,
}

export interface ChartData {
  line: Array<number>;
}

export interface ChartState {
  type: ChartTypes;
  data: ChartData;
  width?: number;
  height?: number;
}

export type ChartProps = ChartState;

export const Chart: React.FC<ChartProps> = (props) => {
  return <ChartView {...props} />;
};
