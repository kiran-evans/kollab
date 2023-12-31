import { CircularProgress } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { getUserByFirebaseId } from "../../api/userApi";
import { ErrorMsg } from '../../components/ErrorMsg/ErrorMsg';
import { AppContext } from "../../lib/ContextProvider";
import { getErrorMessage } from '../../lib/error';
import { fb } from "../../lib/firebase";
import './Login.css';

export default function Login() {

    const { dispatch } = useContext(AppContext);

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [isFetching, setIsFetching] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        if (!credentials.email || !credentials.password) return;

        e.preventDefault();
        setIsFetching(true);
        setErrMsg("");

        try {
            // Log the user in
            const userCredential = await signInWithEmailAndPassword(fb.auth, credentials.email, credentials.password);

            // Get the user data from the db
            const user = await getUserByFirebaseId(userCredential.user.uid);

            // Update the state with the now logged in user
            dispatch({ type: 'SET_USER', payload: user });
        } catch (err) {
            setErrMsg(getErrorMessage(err));
        }

        setIsFetching(false);
    }

    return (
        <div className='login'>
            <form onSubmit={e => handleSubmit(e)}>
                <fieldset disabled={isFetching}>
                    <legend>Login</legend>

                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required value={credentials.email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />

                    <button type="submit">{isFetching ? <><CircularProgress size={20} />&nbsp;Logging in...</> : <>Login</>}</button>
                </fieldset>
            </form>
            {errMsg && <ErrorMsg message={errMsg} />}
            <Link to="/register">Don't have an account? Register</Link>
        </div>
    );
}
