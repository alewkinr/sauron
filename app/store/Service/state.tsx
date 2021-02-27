import { ServiceNamesType, serviceNames } from "../../constants/Services";
import { Service } from "../../models/Service";

export type State = {
  currentService?: Service;
  serviceNames: ServiceNamesType;
};

export const initState: State = {
  serviceNames: serviceNames,
};
