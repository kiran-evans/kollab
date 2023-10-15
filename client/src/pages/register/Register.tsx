import { CircularProgress } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { signUpUser } from "../../api/userApi";
import { ErrorMsg } from '../../components/ErrorMsg/ErrorMsg';
import { AppContext } from "../../lib/ContextProvider";
import { getErrorMessage } from '../../lib/error';
import { fb } from "../../lib/firebase";
import './Register.css';

export default function Register() {
    
    const initialFormEntries = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [formEntries, setFormEntries] = useState(initialFormEntries);
    const [errMsg, setErrMsg] = useState("");
    const [isFetching, setIsFetching] = useState(false);

    const { dispatch } = useContext(AppContext);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // If the passwords don't match, cancel this submission
        if (formEntries.password !== formEntries.confirmPassword) {
            setErrMsg("Passwords must match.");
            return;
        }

        setIsFetching(true);

        try {
            // Create the user in Firebase Auth
            // This automatically updates the Firebase state with a now logged-in User
            await createUserWithEmailAndPassword(fb.auth, formEntries.email, formEntries.password);

            // If Firebase Auth failed to create or login the user, cancel this submission
            if (!fb.auth.currentUser) {
                setErrMsg("Firebase Auth Error: Failed to create user.");
                return;
            }
            
            const user = await signUpUser(formEntries.username, await fb.auth.currentUser.getIdToken());
            dispatch({
                type: 'SET_USER',
                payload: user
            });

            setFormEntries(initialFormEntries);
        } catch (err) {
            setErrMsg(getErrorMessage(err));
        }

        setIsFetching(false);
    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email" name="email" id="email" required value={formEntries.email} onChange={e => setFormEntries({...formEntries, email: e.target.value})} />
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input type="text" name="username" id="username" required value={formEntries.username} onChange={e => setFormEntries({...formEntries, username: e.target.value})} />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" required value={formEntries.password} onChange={e => setFormEntries({...formEntries, password: e.target.value})} />
                    <label htmlFor="confirm-password">
                        Confirm Password:
                    </label>
                    <input type="password" name="confirm-password" id="confirm-password" required value={formEntries.confirmPassword} onChange={e => setFormEntries({...formEntries, confirmPassword: e.target.value})} />
                    <button type="submit" disabled={isFetching}>{isFetching ? <><CircularProgress size={15} />&nbsp;Registering...</> : <>Register</>}</button>
                </fieldset>
            </form>
            {errMsg && <ErrorMsg message={errMsg} />}
            <Link to="/login">Already have an account? Login</Link>
        </div>
    )
}