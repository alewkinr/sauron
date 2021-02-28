import { ChartData } from "../components/Chart/Chart";
import { ResponseMetrics } from "../api/cpu-usage/contracts";

import { dateShortener } from "./time-tools";

export function toLineChartDataSet(input: ResponseMetrics): ChartData {
  const labels = input.datapoints.map((md) => dateShortener(md.ts));
  const data = input.datapoints.map((md) => md.min);

  return {
    line: {
      labels: labels,
      datasets: [{ data }],
    },
  };
}