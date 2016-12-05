import { compose, createStore, applyMiddleware } from 'redux'
import indexReducer from '../reducers/index'
import thunk from 'redux-thunk'

const createStoreMiddleWare = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState) {
  return createStoreMiddleWare(indexReducer, initialState)
}
