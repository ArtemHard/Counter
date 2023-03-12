import { StateType } from "../App";
import { ACtypes } from "./counterAC";

const initialState = {
  count: 0,
  startValue: 0,
  maxValue: 5,
  error: null,
  display: null,
};

export const counterReducer = (
  state: StateType = initialState,
  action: ACtypes
): StateType => {
  switch (action.type) {
    case "INCREASE":
        console.log(state.count);
        
    if(state.count === state.maxValue) return state
      else return { ...state, count: ++state.count };

    case "RESET":
      return { ...state, count: state.startValue };

    default:
      return state;
  }
};


