import { createStore } from 'redux'

const initialState = {
  counter: {
    value: 0,
    step: 15,
  },
  todolist: {
    value: '',
  },
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'conter/Increment':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      }
    case 'conter/Decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
