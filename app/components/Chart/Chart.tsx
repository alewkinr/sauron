import React from "react";

import { ChartView } from "./ChartView";

export interface ChartData {
  somedata: string;
}

export interface ChartState {
  data: ChartData;
  width?: number;
  height?: number;
}

export type ChartProps = ChartState;

export const Chart: React.FC<ChartProps> = (props) => {
  return <ChartView {...props} />;
};
