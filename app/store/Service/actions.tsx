import { Service } from "../../models/Service";

import { Keys } from "./keys";

// setCurrentService — выбираем текущий сервис
export const setCurrentService = (service: Service) => {
  return {
    type: Keys.SET_CURRENT_SERVICE,
    service,
  } as const;
};

// dropCurrentService — убираем текущий сервис
export const dropCurrentService = () => {
  return {
    type: Keys.DROP_CURRENT_SERVICE,
    service: {},
  } as const;
};
