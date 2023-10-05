import { Reducer } from 'react';
import { User } from '../types/User';
/**
 * @type AppState
 * @property {User | null} user - This part of the AppState stores whether or not there is a User logged in.
 */
export type AppState = {
    user: User | null
}

/**
 * @type ContextAction
 * @property {string} type - This is the "type" of action that is being performed, e.g. 'SET_USER'.
 * @property {User | null} payload - This is the data which is to be updated in the AppState.
 */
export type ContextAction = {
    type: string;
    payload: User | null;
}

/**
 * Reducer to simplify updating the different parts of the AppState.
 * 
 * @param state - The current AppState.
 * @param action - The action to be taken on this call of stateReducer.
 * 
 * @returns A valid AppState, with any required data updates applied.
 */
export const stateReducer = ((state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'SET_USER':
            newState.user = action.payload as User | null;
            break;
        default:
            return state;
    }
    return newState;
}) satisfies Reducer<AppState, ContextAction>