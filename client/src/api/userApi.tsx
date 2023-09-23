import { User } from "../../types/User";

/**
 * Creates a User object in the database, using a Firebase Auth User.
 * 
 * @param username - The username that the user entered.
 * @param idToken - The idToken of the current Firebase Auth User.
 * @returns A Promise containing the data for the created user in the database.
 */
export const signUpUser = async (username: string, idToken: string): Promise<User> => {
    const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            idToken,
            username
        })
    });

    if (!res.ok) {
        throw Error(res.statusText);
    }

    return await res.json();
}