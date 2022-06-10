import { configureStore } from '@reduxjs/toolkit';
import { peopleReducer } from './reducers';
export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
export type State = ReturnType<typeof store.getState>;
