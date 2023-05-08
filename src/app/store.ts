// configureStore() is a wrapper around the basic createStore() function
// it automatically sets up a redux store with the right tools e.g redux devtools
// automatically adds the thunk middleware
// automatically turns on development checks
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { dogsApiSlice } from '../features/dogs/dogsApiSlice';

// the store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(dogsApiSlice.middleware)
  }
})

// exporting types based on the store
// AppDispatch is the type of the dispatch function of the store
// typeof store.dispatch returns the type of the dispatch function of the store
export type AppDispatch = typeof store.dispatch;

// RootState is the type of the entire Redux store state
// ReturnType<typeof store.getState> returns the type of the entire Redux store state
export type RootState = ReturnType<typeof store.getState>