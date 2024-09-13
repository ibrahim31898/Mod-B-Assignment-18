import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state) => {
      state.counter += 1
    },
    minusCounter: (state) => {
      state.counter -= 1
    },
  },
})

export const { addCounter, minusCounter } = counterSlice.actions

export default counterSlice.reducer
