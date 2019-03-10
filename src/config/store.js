import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, enhancer);

export default store;
