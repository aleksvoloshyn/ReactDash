import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from './counter/counter-reducer'

const store = configureStore({
  reducer: { counter: counterReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
