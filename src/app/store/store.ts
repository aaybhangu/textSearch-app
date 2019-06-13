import { createStore, Store } from "redux";
import { rootReducers } from "./reducers";

export interface IAppState {
  filteredListArr: [];
}
export const store = createStore(rootReducers) as Store<IAppState>;
