import { number } from "prop-types";

import {
  BACKEND_BASE_URL,
  NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT,
  ECSWA_METRICS_TYPE,
  PERIOD_REFRESH_DATA,
  FILTER_TYPE,
  ECS_DIMS,
  ECS_INSTANCE_ID,
} from "../../constants/Api";
import { timeConverter } from "../../utils/time-tools";

import { GetMetricsDataContract } from "./contracts";

const getDataByMetricsName = async (
  accessToken: string,
  params: GetMetricsDataContract
) => {
  const url = new URL(`${BACKEND_BASE_URL}/api/metrics/data`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const method = "GET";
  const headers = {
    accept: "*/*",
    Authorization: `Bearer ${accessToken}`,
  };

  const resp = await fetch(url, { method, headers });

  if (resp.status !== 200) {
    const err = `error to get metrics from backend, got status ${resp.status}`;
    console.log(err);
    throw new Error(err);
  }

  return await resp.json();
};

const getDataCloudCPU = async (
  accessToken: string,
  tsFrom: number,
  tsTo: number
) => {
  const query = {
    nameSpace: NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT,
    metricName: ECSWA_METRICS_TYPE.cpuUsage,
    dimensionIndex: 0,
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.min,
  } as GetMetricsDataContract;

  return await getDataByMetricsName(accessToken, query);
};

const getDataLoadAverage = async (
  accessToken: string,
  tsFrom: number,
  tsTo: number
) => {
  const query = {
    nameSpace: NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT,
    metricName: ECSWA_METRICS_TYPE.loadAverage5,
    dimensionIndex: 0,
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.min,
  } as GetMetricsDataContract;

  return await getDataByMetricsName(accessToken, query);
};

const getDataDiskIO = async (
  accessToken: string,
  tsFrom: number,
  tsTo: number
) => {
  const query = {
    nameSpace: NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT,
    metricName: ECSWA_METRICS_TYPE.diskIoUtils,
    dimensionIndex: 0,
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.min,
  } as GetMetricsDataContract;

  return await getDataByMetricsName(accessToken, query);
};

const getDataPacketRecv = async (
  accessToken: string,
  tsFrom: number,
  tsTo: number
) => {
  const query = {
    nameSpace: NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT,
    metricName: ECSWA_METRICS_TYPE.netPacketRecv,
    dimensionIndex: 0,
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.min,
  } as GetMetricsDataContract;

  return await getDataByMetricsName(accessToken, query);
};

const getDataPacketSent = async (
  accessToken: string,
  tsFrom: number,
  tsTo: number
) => {
  const query = {
    nameSpace: NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT,
    metricName: ECSWA_METRICS_TYPE.netPacketSent,
    dimensionIndex: 0,
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.min,
  } as GetMetricsDataContract;

  return await getDataByMetricsName(accessToken, query);
};

const getMetrics = async (
  metric: string,
  token: string,
  from: number,
  to: number
) => {
  switch (metric) {
    case ECSWA_METRICS_TYPE.cpuUsage:
      return await getDataCloudCPU(token, from, to);
    case ECSWA_METRICS_TYPE.loadAverage5:
      return await getDataLoadAverage(token, from, to);
    case ECSWA_METRICS_TYPE.diskIoUtils:
      return await getDataDiskIO(token, from, to);
    case ECSWA_METRICS_TYPE.netPacketRecv:
      return await getDataPacketRecv(token, from, to);
    case ECSWA_METRICS_TYPE.netPacketSent:
      return await getDataPacketSent(token, from, to);
    default:
      throw Error("undefined metric type");
  }
};

export {
  getMetrics,
  getDataCloudCPU,
  getDataLoadAverage,
  getDataDiskIO,
  getDataPacketRecv,
  getDataPacketSent,
};
