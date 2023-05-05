// configureStore() is a wrapper around the basic createStore() function
// it automatically sets up a redux store with the right tools e.g redux devtools
// automatically adds the thunk middleware
// automatically turns on development checks
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// the store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})

// exporting types based on the store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>