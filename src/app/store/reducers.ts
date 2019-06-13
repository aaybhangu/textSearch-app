import { combineReducers } from "redux";

function filteredArrayReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_ARRAY":
      return [...state, action.payload];
    default:
      return state;
  }
}

function selectedItemsReducer(state = [], action) {
  switch (action.type) {
    case "SELECTED_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}

export const rootReducers = combineReducers({
  filteredArray: filteredArrayReducer,
  selectedItemsArray: selectedItemsReducer
});
