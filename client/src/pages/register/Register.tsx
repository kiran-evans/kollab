export default function Register () {
    return (
        <>
        <form>
                <fieldset>
                    <legend>Register</legend>

                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" id="username" />
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" id="password" />
                    </label>
                    <label htmlFor="confirm-password">
                        Confirm-Password:
                        <input type="password" name="confirm-password" id="cconfirm-password" />
                    </label>
                <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </>
    )
}