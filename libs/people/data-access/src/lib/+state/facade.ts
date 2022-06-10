import { catchError, tap, throwError } from 'rxjs';
import { PeopleApiService } from '../data/api-service';
import { peopleActions } from './actions';
import { technicians$, people$ } from './selectors';
import { store } from './store';

function fetchPeople(): void {
  PeopleApiService.fetch()
    .pipe(
      tap((people) => {
        console.log('fetch completed');
        store.dispatch(peopleActions.addPeople(people));
      }),
      catchError((error) => throwError(() => error))
    )
    .subscribe();
}
function clearPeople(): void {
  store.dispatch(peopleActions.clearPeople());
}
export const PeopleFacade = {
  fetch: fetchPeople,
  clear: clearPeople,
  people$: people$,
  technicians$,
};
