import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: number;

  constructor(
    private store: Store<AppState>
  ) {

    this.store.select('counter').subscribe((counterState) => {
      this.counter = counterState;
      console.log('initState', counterState);
    });
  }

}
