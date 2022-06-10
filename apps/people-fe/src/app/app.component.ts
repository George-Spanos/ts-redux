import { Component, Inject, OnInit } from '@angular/core';
import { PeopleFacade } from '@ts-redux/people/data-access';
import { take, tap, timer } from 'rxjs';
import { PEOPLE_FACADE } from './people-store.token';

@Component({
  selector: 'ts-redux-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(PEOPLE_FACADE) private peopleFacade: typeof PeopleFacade) {}
  title = 'people-fe';
  ngOnInit(): void {
    this.peopleFacade.people$.subscribe((p) => {
      console.log(p);
    });
    timer(1500, 1500)
      .pipe(
        take(5),
        tap(() => {
          this.peopleFacade.fetch();
        })
      )
      .subscribe();
    setTimeout(() => {
      this.peopleFacade.clear();
    }, 4000);
  }
}
