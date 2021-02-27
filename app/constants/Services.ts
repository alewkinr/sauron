export interface ServiceNamesType {
  Computing: Array<string>;
  Storage: Array<string>;
  Network: Array<string>;
  Security: Array<string>;
  Application: Array<string>;
  Database: Array<string>;
  Migration: Array<string>;
  EnterpriseIntelligence: Array<string>;
  ManagementAndDeployment: Array<string>;
}

export const serviceNames = {
  Computing: [
    "FunctionGraph",
    "ElasticCloudServer",
    "AutoScaling",
    "CloudContainerEngine",
    "BareMetalServer",
    "ImageManagementService",
  ],

  Storage: [
    "ElasticVolumeService",
    "CloudBackupAndRecovery",
    "ObjectStorageService",
    "ScalableFileService",
  ],

  Network: [
    "VirtualPrivateCloud",
    "ElasticLoadBalance",
    "VirtualPrivateNetwork",
    "DirectConnect",
    "DomainNameService",
    "NATGateway",
    "ElasticIP",
    "VPCEndpoint",
  ],

  Security: ["WebApplicationFirewall"],

  Application: [
    "CloudPerformanceTestService",
    "ServiceStage",
    "ApplicationOrchestrationService",
    "DistributedCacheService",
    "DistributedMessageServiceForKafka",
    "DistributedMessageServiceForRabbitMQ",
    "SimpleMessageNotification",
    "SoftWareRepositoryForContainer",
    "APIGateway",
  ],

  Database: [
    "RelationalDatabaseService",
    "DataAdminService",
    "DocumentDatabaseService",
    "DataReplicationService",
  ],

  Migration: ["ServerMigrationService"],

  EnterpriseIntelligence: [
    "DAYU",
    "MapReduceService",
    "CloudSearchService",
    "DataWarehouseService",
    "DataLakeInsight",
    "GraphEngineService",
  ],

  ManagementAndDeployment: [
    "TagManagementService",
    "CloudEye",
    "CloudTraceService",
    "ApplicationOperationManagement",
    "ApplicationPerformanceManagement",
    "IdentityAndAccessManagement",
    "LogTankService",
  ],
};
