import { from, Observable } from 'rxjs';
import { url } from '../constants';
import { Person } from '../model/person';
const fetchPeople: () => Observable<Person[]> = () =>
  from(fetch(`${url}`).then((response) => response.json().then((data) => data as Person[])));
export const PeopleApiService = {
  fetch: fetchPeople,
};
