import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'

import { increment, decrement } from './counter-actions'

const valueReducer = createReducer([], {
  [increment]: (state, { payload }) => [Number(state) + payload],
  [decrement]: (state, { payload }) => [state - payload],
})

const stepReducer = (state = 10, _) => {
  return state
}

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
})

export default counterReducer
