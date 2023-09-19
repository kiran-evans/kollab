import { Dispatch, createContext, useReducer } from 'react';
import { AppState, ContextAction, stateReducer } from './stateReducer';

const initialState: AppState = {
    user: null
}

export const AppContext = createContext<{ state: AppState, dispatch: Dispatch<ContextAction> }>({ state: initialState, dispatch: () => {} });

export const ContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    return (
        <AppContext.Provider value={{
            state,
            dispatch
        }}>{children}</AppContext.Provider>
    )
}