/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Action, ActionReducer } from '@ngrx/store';
import { ActionTypes } from '../auth/action-types';

// eslint-disable-next-line @typescript-eslint/ban-types
export function clearStateMetaReducer<State extends {}>(reducer: ActionReducer<State>): ActionReducer<State> {
    return function clearStateFn(state: State, action: Action) {
        if (action.type === ActionTypes.SIGNOUT) {
            state = {} as State; // ==> Emptying state here
        }
    return reducer(state, action);
   };
}