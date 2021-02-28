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
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.avg,
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
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.avg,
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
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.avg,
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
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.avg,
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
    dimensionName: ECS_DIMS.instanceId,
    dimensionValue: ECS_INSTANCE_ID,
    from: timeConverter(tsFrom),
    to: timeConverter(tsTo),
    period: PERIOD_REFRESH_DATA.five,
    filter: FILTER_TYPE.avg,
  } as GetMetricsDataContract;

  return await getDataByMetricsName(accessToken, query);
};

export {
  getDataCloudCPU,
  getDataLoadAverage,
  getDataDiskIO,
  getDataPacketRecv,
  getDataPacketSent,
};
