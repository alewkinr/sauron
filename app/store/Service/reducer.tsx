import { Keys } from "./keys";
import { Actions } from "./actions-type";
import { initState, State } from "./state";

export const ServiceReducer = (state = initState, action: Actions): State => {
  switch (action.type) {
    case Keys.SET_CURRENT_SERVICE:
      return { ...state, currentService: action.service };
    case Keys.DROP_CURRENT_SERVICE:
      return { ...state, currentService: undefined };
    default:
      return state;
  }
};
