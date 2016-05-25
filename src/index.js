import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import items from 'data'
import App from 'App'

let store = createStore(reducer)
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);
render(app, document.getElementById('app'));
