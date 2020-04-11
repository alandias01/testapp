import { createStore } from "redux";
import { rootReducer } from "./reducers/index";

export default function configureStore(preloadedState: any) {
  const enhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(rootReducer, preloadedState, enhancer);

  return store;
}
