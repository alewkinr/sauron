// export interface Metrics {
//   min: number;
//   timestamp: number;
//   unit: "string" | "number";
// }
//
// export interface CPUMetrics {
//   metricName: string;
//   datapoints: Array<Metrics>;
// }

export interface GetMetricsDataContract {
  nameSpace: string;
  metricName: string;
  dimensionName: string;
  dimensionValue: string;
  from: string;
  to: string;
  period: string;
  filter: string;
}
