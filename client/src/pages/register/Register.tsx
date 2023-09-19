import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useContext, useState } from "react";
import { signUpUser } from "../../api/userApi";
import { AppContext } from "../../lib/ContextProvider";
import { fb } from "../../lib/firebase";

export default function Register() {
    
    const initialFormEntries = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [formEntries, setFormEntries] = useState(initialFormEntries);

    const { dispatch } = useContext(AppContext);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // If the passwords don't match, cancel this submission
        if (formEntries.password !== formEntries.confirmPassword) {
            alert("Passwords must match.");
            return;
        }
        
        // Create the user in Firebase Auth
        // This automatically updates the Firebase state with a now logged-in User
        await createUserWithEmailAndPassword(fb.auth, formEntries.email, formEntries.password);

        // If Firebase Auth failed to create or login the user, cancel this submission
        if (!fb.auth.currentUser) {
            throw "Firebase Auth failed to create user.";
        }
        
        const res = await signUpUser(formEntries.username, await fb.auth.currentUser.getIdToken());
        dispatch({
            type: 'SET_USER',
            payload: await res.json()
        });

        setFormEntries(initialFormEntries);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="email">
                        Email:
                        <input type="email" name="email" id="email" />
                    </label>
                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" id="username" />
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" id="password" />
                    </label>
                    <label htmlFor="confirm-password">
                        Confirm Password:
                        <input type="password" name="confirm-password" id="confirm-password" />
                    </label>
                <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </>
    )
}