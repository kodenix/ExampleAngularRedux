import { AppState } from './app.state';
import { counterReducer } from './counter/counter.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';

export const AppReducer: ActionReducerMap<AppState> = {
    counter: counterReducer
};
