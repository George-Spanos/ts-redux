import { createReducer } from '@reduxjs/toolkit';
import { Person } from '../model/person';
import { peopleActions } from './actions';
export interface IPeopleState {
  items: Person[];
}
export const peopleReducer = createReducer<IPeopleState>({ items: [] }, (builder) =>
  builder
    .addCase(peopleActions.addPeople, (state, action) => {
      state.items = [...action.payload];
    })
    .addCase(peopleActions.clearPeople, (state) => {
      state.items = [];
    })
);
