// This file contains a basic redux slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// count interface - shape
interface CounterState {
  value: number;
}

// initial state
const initialState: CounterState = {
  value: 0
} 

// slice that contains reducer logic
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment one
    incremented(state) {
      // immer library(included in the redux toolkit) works under the hood 
      // to track changes to state and ensure state is 'immutable'
      state.value++
    },
    // decrement one
  }
})

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
