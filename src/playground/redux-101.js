import { createStore } from "redux";

// Action generators = functions returning action ojects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

// if (action.type === "INCREMENT") {
//   return {
//     count: state.count + 1
//   };
// } else {
//   return state;
// }
// //////
// if incrementBy exists - ok, if not give 1 as default
// if incrementBy is object

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

// REDUCERS
// - pure functions - interact with and use only things that are from their function scope
// - never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Action - object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
