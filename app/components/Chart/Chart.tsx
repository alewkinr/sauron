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
  line?: {
    labels: Array<string>;
    datasets: Array<ChartDataSet>;
  };
  doughnut?: {
    labels: Array<string>;
    data: Array<number>;
  };
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
  strokeWidth?: number;
  propsForBackgroundLines?: {
    stroke?: string;
    strokeWidth?: string;
    strokeDasharray: [];
  };
  isHiddenLegend?: boolean;
}

export interface ChartState {
  type: ChartTypes;
  title?: string;
  data: ChartData;
  height: number;
  radius?: number;
  config?: CharConfig;
}

export type ChartProps = ChartState;
