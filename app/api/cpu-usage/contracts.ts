export interface GetMetricsDataContract {
  nameSpace: string;
  metricName: string;
  dimensionIndex: number;
  dimensionName: string;
  dimensionValue: string;
  from: string;
  to: string;
  period: number;
  filter: string;
}

export interface ResponseMetricsData {
  min: number;
  ts: number;
  unit: string;
}
export interface ResponseMetrics {
  datapoints: Array<ResponseMetricsData>;
  metricName: string;
}
