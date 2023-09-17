export default function NewComment() {
    return (
        <form >
            <fieldset>
                <legend>New Comment</legend>
                <label htmlFor="new-comment">
                    Comment Message:
                </label>
                <textarea name="new-comment" id="new-comment" ></textarea>
                <input type="submit" value="submit" />
            </fieldset>
        </form>
    )
}