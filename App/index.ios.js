import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import Router from './Src/Containers/Router';
// import AppContainer from './Src/Containers/AppContainer';
import reducer from './Src/Reducers/RootReducer';

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      // loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent('App', () => App);
