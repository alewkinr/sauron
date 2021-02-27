import React from "react";

import { ResourceCardView } from "./ResourceCardView";

export interface Resource {
  id: string;
  amount: number;
  alerts: number;
}

export interface ResourceCardState {
  title: string;
  isHorizontal: boolean;
  resources: Array<Resource>;
}

export type ResourceCardProps = ResourceCardState;

export const ResourceCard: React.FC<ResourceCardProps> = (props) => {
  return <ResourceCardView {...props} />;
};
