import { DECREMENT, INCREMENT } from "../Types/type";

export const IncrementCount = () => {
  return (dispatch) => {
    dispatch(increment());
  };
};

export const DecrementCount = () => {
  return (dispatch) => {
    dispatch(decrement());
  };
};

const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}