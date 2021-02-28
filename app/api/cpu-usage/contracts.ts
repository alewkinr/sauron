export interface GetMetricsDataContract {
  nameSpace: string;
  metricName: string;
  dimensionName: string;
  dimensionValue: string;
  from: string;
  to: string;
  period: number;
  filter: string;
}
