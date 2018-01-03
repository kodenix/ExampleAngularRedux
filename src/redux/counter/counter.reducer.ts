import { PlusAction, INCREMENT, DECREMENT, PLUS } from './counter.actions';
import { Action } from '@ngrx/store';

export function counterReducer(state: number = 0, action: Action): number {

    // tslint:disable-next-line:curly
    if (action === null) return state;

    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case PLUS:
            return state + (<PlusAction>action).payload;
        default:
            return state;
    }

}
