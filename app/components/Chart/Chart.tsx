import { useReducer, useMemo }  from "react";
import AsyncStorage             from "@react-native-async-storage/async-storage";
import {getDataByMetricsName}   from "../../api/metrics-data/requests"
import {GetMetricsDataContract} from "../../api/metrics-data/contracts"
import {err}                    from "react-native-svg/lib/typescript/xml";

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

const [state, dispatch] = useReducer(
  (prevState, action) => {
    switch (action.type) {
      case "COLLECT_DATA":
        return {
          ...prevState,
          data: action.data,
          isLoading: false,
        };
      case "SOMETHING":
        break;
    }
  },
  {
    isLoading: false,
  }
);

const getDataContext = useMemo(
  () => ({
    getMetricsData: async () => {
      const query = {
        nameSpace: string;
        metricName: string;
        dimensionName: string;
        dimensionValue: string;
        from: string;
        to: string;
        period: string;
        filter: string;
      } as GetMetricsDataContract
      try {
        const userToken = AsyncStorage.getItem("userToken");
        const data = AsyncStorage.setItem("data", await getDataByMetricsName(userToken, query));
        console.debug(data)
        dispatch({ type: "COLLECT_DATA", data: data });
      } catch (e) {
        console.error(`Не удалось получить данные о метриках ${e}`)
      }
    },
  }),
  []
);
