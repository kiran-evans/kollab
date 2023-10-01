import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { User } from '../../types/User';
import { getAllPosts } from '../api/postApi';
import { getUserByFirebaseId } from '../api/userApi';
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
    user: await getInitialUser(),
    posts: []
}

export const AppContext = createContext<{ state: AppState, dispatch: Dispatch<ContextAction> }>({ state: initialState, dispatch: () => {} });

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    useEffect(() => {
        (async () => {
            dispatch({ type: 'SET_USER', payload: await getInitialUser() });
        })();

        (async ()=> {
            dispatch({
                type: "LOAD_POSTS",
                payload: await getAllPosts()
            })
        })();
    }, []);

    return (
        <AppContext.Provider value={{
            state,
            dispatch
        }}>{children}</AppContext.Provider>
    )
}