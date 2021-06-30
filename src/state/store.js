import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers/index'
import ThunkMiddleware from 'redux-thunk'

const store = createStore(
  reducers,
  {},
  applyMiddleware(ThunkMiddleware)
)

export default store