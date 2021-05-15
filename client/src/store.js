import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import setAuthToken from "./utils/setAuthToken";

const initialState = {};

const composeEnhancers = composeWithDevTools({  
  trace: true, 
  traceLimit: 25 
}); 

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

// set up a store subscription listener
// to store users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
  // keep track of previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if token changes, set value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
