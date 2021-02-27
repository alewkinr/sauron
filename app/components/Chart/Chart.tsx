import Colors from "../../constants/Colors";

export enum ChartTypes {
  line,
  bar,
  radar,
  pie,
  doughnut,
  parea,
  bubble,
  scatter,
  area,
  mixed,
}

export interface ChartDataSet {
  data: Array<number>;
}

export interface ChartData {
  labels: Array<string>;
  datasets: Array<ChartDataSet>;
}

export interface CharConfig {
  backgroundColor?: string;
  backgroundGradientFrom?: string;
  backgroundGradientTo?: string;
  fillShadowGradient?: string;
  fillShadowGradientOpacity?: number;
  decimalPlaces?: number;
  color?: CallableFunction;
  labelColor?: CallableFunction;
  propsForBackgroundLines: {
    stroke?: string;
    strokeWidth?: string;
    strokeDasharray: [];
  };
}

export interface ChartState {
  type: ChartTypes;
  title?: string;
  data: ChartData;
  height: number;
  config?: CharConfig;
}

export type ChartProps = ChartState;
