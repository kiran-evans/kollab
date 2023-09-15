export default function Login() {
    return (
        <>
            <form>
                <fieldset>
                    <legend>Login</legend>

                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </>
    );
}
