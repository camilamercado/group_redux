import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import configureStore from './store/configureStore'
import items from 'data'
import App from 'App'
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);
render(app, document.getElementById('app'));

