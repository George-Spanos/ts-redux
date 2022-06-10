import { createAction } from '@reduxjs/toolkit';
import { Person } from '../model/person';

const addPeople = createAction<Person[]>('people/add');
const clearPeople = createAction('people/clear');
const fetchPeople = createAction('people/fetch');
export const peopleActions = {
  addPeople,
  clearPeople,
  fetchPeople,
};
