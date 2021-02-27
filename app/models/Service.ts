export interface ServiceSettings {
  value: string;
}

export interface Service {
  name: string;
  url: URL;
  settings: Map<string, ServiceSettings>;
}
