import React, { useReducer } from "react";

export default function Reducer() {
  const initialState = {
    basket: [],
    favs: [],
    user: null,
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -
      </button>
    </div>
  );
}
