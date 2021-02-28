export const BACKEND_BASE_URL = "http://37.230.195.199";
export const DEF_USERNAME = "user";
export const DEF_PASSWORD = "user";

export const NAMESPACE_ELASTIC_CLOUD_SERVER = "SYS.ECS";
export const NAMESPACE_ELASTIC_CLOUD_SERVER_WITH_AGENT = "AGT.ECS";
export const NAMESPACE_RELATIONAL_DATABASE_SERVICE = "SYS.RDS";

export const ECS_INSTANCE_ID = "cc49bc2b-20ff-4a7d-bfe3-56fc061b30b0";
export enum ECS_DIMS {
  instanceId = "instance_id",
}

export enum PERIOD_REFRESH_DATA {
  realtime = 1,
  five = 300,
}

export enum FILTER_TYPE {
  avg = "average",
  max = "max",
  min = "min",
  sum = "sum",
  variance = "variance",
}

export enum ECS_METRICS_TYPE {
  cpuUtil = "cpu_util",
  memUtil = "mem_util",
  diskUtilInband = "disk_util_inband",
  diskReadBytesRate = "disk_read_bytes_rate",
  diskWriteBytesRate = "disk_write_bytes_rate",
  diskReadRequestsRate = "disk_read_requests_rate",
  diskWriteRequestsRate = "disk_write_requests_rate",
  networkIncomingBytesRateInband = "network_incoming_bytes_rate_inband",
  networkOutgoingBytesRateInband = "network_outgoing_bytes_rate_inband",
  networkIncomingBytesAggregateRate = "network_incoming_bytes_aggregate_rate",
  networkOutgoingBytesAggregateRate = "network_outgoing_bytes_aggregate_rate",
}

export enum ECSWA_METRICS_TYPE {
  cpuUsage = "cpu_usage",
  loadAverage5 = "load_average5",
  memUsedPercent = "mem_usedPercent",
  mountPointPrefixDiskFree = "mountPointPrefix_disk_free",
  mountPointPrefixDiskUsedPercent = "mountPointPrefix_disk_usedPercent",
  diskIoUtils = "disk_ioUtils",
  diskInodesUsedPercent = "disk_inodesUsedPercent",
  netBitSent = "net_bitSent",
  netBitRecv = "net_bitRecv",
  netPacketRecv = "net_packetRecv",
  netPacketSent = "net_packetSent",
  netTcpTotal = "net_tcp_total",
  netTcpEstablished = "net_tcp_established",
}
