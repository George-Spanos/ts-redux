import { BehaviorSubject, map } from 'rxjs';
import { Person } from '../model/person';
import { store } from './store';

store.subscribe(handleStoreChange);

const peopleComparer: (people: Person[]) => boolean = (() => {
  let oldPeople: Person[] = [];
  return function (people: Person[]) {
    const result = JSON.stringify(people) !== JSON.stringify(oldPeople);
    oldPeople = people;
    return result;
  };
})();
function handleStoreChange(): void {
  const state = store.getState();
  if (shouldUpdate(peopleComparer, state.people.items)) people$.next(state.people.items);
}
function shouldUpdate<T>(comparer: (value: T) => boolean, value: T): boolean {
  return comparer(value);
}
export const people$: BehaviorSubject<Person[]> = new BehaviorSubject([] as Person[]);
export const technicians$ = people$.pipe(map((people) => people.filter((p) => p.jobType === 'Technician')));
