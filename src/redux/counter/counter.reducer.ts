import { INCREMENT, DECREMENT, PLUS, RESET, AllActions } from './counter.actions';
import { Action } from '@ngrx/store';

export function counterReducer(state: number = 0, action: AllActions): number {

    // tslint:disable-next-line:curly
    if (action === null) return state;

    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case PLUS:
            return state + action.payload;
        case RESET:
            return state = 0;
        default:
            return state;
    }

}
