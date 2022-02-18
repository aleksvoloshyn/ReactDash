import { createAction } from '@reduxjs/toolkit'

export const addToDo = createAction('conter/Increment', (text) => ({
  payload: {
    id: 1,
    text,
    completed: false,
  },
}))

export const increment = createAction('conter/Increment')
export const decrement = createAction('conter/Decrement')
