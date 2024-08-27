import { DECREMENT, INCREMENT } from "../Types/type";

let defaultState = {
  count: 1,
};

const CounterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
    };
    case DECREMENT:
      return {
        count: state.count - 1,
    };
    default : 
        return state;
  }
};

export default CounterReducer;
