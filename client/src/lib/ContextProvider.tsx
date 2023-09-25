import { Dispatch, createContext, useReducer } from 'react';
import { AppState, ContextAction, stateReducer } from './stateReducer';
import { getAllPosts } from '../api/postApi';

const initialState: AppState = {
    user: null,
    posts: [...await getAllPosts()],
    comments: []
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