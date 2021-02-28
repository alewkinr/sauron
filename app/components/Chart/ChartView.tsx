import React, { useEffect, useReducer, useMemo } from "react";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Colors from "../../constants/Colors";
import { View } from "../Themed";
import { getDataCloudCPU } from "../../api/cpu-usage/requests";

import { ChartProps, ChartTypes } from "./Chart";

const initChartConfig = (props: ChartProps): ChartConfig => {
  return Object.assign(
    {},
    {
      backgroundColor: Colors.light.background,
      backgroundGradientFrom: Colors.light.background,
      backgroundGradientTo: Colors.light.background,
      fillShadowGradient: Colors.light.tint,
      fillShadowGradientOpacity: 0.3,
      decimalPlaces: 2,
      color: () => Colors.light.tint,
      labelColor: () => Colors.light.grey,
      propsForBackgroundLines: {
        stroke: Colors.light.lightGrey,
        strokeWidth: "1",
        strokeDasharray: [],
      },
    },
    props.config
  );
};
const ChartView = function (props: ChartProps): JSX.Element {
  // const [state, dispatch] = useReducer(
  //   (prevState, action) => {
  //     switch (action.type) {
  //       case "COLLECT_DATA":
  //         return {
  //           ...prevState,
  //           data: action.data,
  //           isLoading: false,
  //         };
  //       case "SOMETHING":
  //         break;
  //     }
  //   },
  //   {
  //     isLoading: false,
  //   }
  // );
  //
  // useEffect(() => {
  //   let userToken;
  //   try {
  //     userToken = AsyncStorage.getItem("userToken");
  //   } catch (e) {
  //     console.log(`error to get token ${e}`);
  //   }
  //   dispatch({ type: "RESTORE_TOKEN", token: userToken });
  // }, []);
  //
  // const getDataContext = useMemo(
  //   () => ({
  //     getMetricsData: async () => {
  //       try {
  //         const userToken = AsyncStorage.getItem("userToken");
  //         const data = AsyncStorage.setItem(
  //           "data",
  //           await getDataCloudCPU(userToken, Date.now(), Date.now())
  //         );
  //         console.debug(data);
  //         dispatch({ type: "COLLECT_DATA", data: data });
  //       } catch (e) {
  //         console.error(`Не удалось получить данные о метриках ${e}`);
  //       }
  //     },
  //   }),
  //   []
  // );

  switch (props.type) {
    case ChartTypes.line:
      return (
        <View>
          <LineChart
            data={props.data.line}
            height={props.height}
            width={80}
            chartConfig={initChartConfig(props)}
            bezier
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
        <View>
          <ProgressChart
            data={props.data.doughnut}
            width={120}
            height={80}
            strokeWidth={props.config?.strokeWidth}
            radius={props.radius}
            chartConfig={initChartConfig(props)}
            hideLegend={props.config?.isHiddenLegend}
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
};

export const Chart: React.FC<ChartProps> = (props) => {
  return <ChartView {...props} />;
};
