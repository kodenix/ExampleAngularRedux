import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { RESET, ResetAction } from '../../redux/counter/counter.actions';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  counter: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.readState();
  }

  ngOnInit() {
  }

  private readState() {
    this.store.select('counter').subscribe((counterState) => {
      this.counter = counterState;
    });
  }

  reset() {
    const action: Action = new ResetAction();
    this.store.dispatch(action);
  }

}
