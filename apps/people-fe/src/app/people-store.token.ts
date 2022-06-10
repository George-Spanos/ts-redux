import { InjectionToken } from '@angular/core';
import { PeopleFacade } from '@ts-redux/people/data-access';

export const PEOPLE_FACADE = new InjectionToken<typeof PeopleFacade>('PEOPLE_FACADE', {
  providedIn: 'root',
  factory: () => PeopleFacade,
});
