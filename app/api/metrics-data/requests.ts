import { BACKEND_BASE_URL } from "../../constants/Api";

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

export default getDataByMetricsName;
