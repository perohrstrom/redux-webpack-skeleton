import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/createStore'
import VisibleApp from './VisibleApp'

const store = configureStore();

render(
  <Provider store={store}>
    <VisibleApp />
  </Provider,
  document.getElementById('app')
)
