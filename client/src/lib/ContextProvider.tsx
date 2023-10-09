import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { getUserByFirebaseId } from '../api/userApi';
import { User } from '../types/User';
import { fb } from './firebase';
import { AppState, ContextAction, stateReducer } from './stateReducer';

const getInitialUser = async (): Promise<User | null> => {
    // If there is a current Firebase Auth session, initialize the state with the current user
    if (fb.auth.currentUser) {
        return await getUserByFirebaseId(fb.auth.currentUser.uid);
    }
    
    return null;
}

const initialState: AppState = {
    user: null
}

export const AppContext = createContext<{ state: AppState, dispatch: Dispatch<ContextAction> }>({ state: initialState, dispatch: () => {} });

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    useEffect(() => {
        (async () => {
            dispatch({ type: 'SET_USER', payload: await getInitialUser() });
        })();
    }, []);

    return (
        <AppContext.Provider value={{
            state,
            dispatch
        }}>{children}</AppContext.Provider>
    )
}