import { ChartData } from "../components/Chart/Chart";
import { ResponseMetrics } from "../api/cpu-usage/contracts";

import { dateShortener } from "./time-tools";

export function toLineChartDataSet(input: ResponseMetrics): ChartData {
  // const labels = input.datapoints.map((md) => dateShortener(md.ts));
  const labels = input.datapoints.map((md) => dateShortener(md.timestamp));
  const data = input.datapoints.map((md) => md.min);

  if (labels.length === 0 || data.length === 0) {
    return {
      line: {
        labels: ["0", "0", "0"],
        datasets: [
          {
            data: [0, 0, 0],
          },
        ],
      },
    };
  }

  return {
    line: {
      labels: labels,
      datasets: [{ data }],
    },
  };
}
