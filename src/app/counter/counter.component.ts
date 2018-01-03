import { Component, OnInit } from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { PlusAction, IncrementAction, DecrementAction } from './../../redux/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  protected counter: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('counter').subscribe((counterState) => {
      this.counter = counterState;
    });
  }

  ngOnInit() {
  }

  public increment() {
    const action: Action = new IncrementAction();
    this.store.dispatch(action);

  }

  decrement() {
    const action: Action = new DecrementAction();
    this.store.dispatch(action);
  }

  plus() {
    const action: PlusAction = new PlusAction(12);
    this.store.dispatch(action);
  }

}
