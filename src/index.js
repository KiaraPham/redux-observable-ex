import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from "react-redux/es/components/Provider";
import {rootReducer} from "./reducers";
import {applyMiddleware, createStore} from "redux";
import * as actions from "./actions";
import {rootEpic} from "./epics";
import {createEpicMiddleware} from "redux-observable";


const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);
store.dispatch(actions.getAllProducts());
// console.log(actions.getAllProducts())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
