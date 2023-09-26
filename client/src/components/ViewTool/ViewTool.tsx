export default function ViewTool(props: { name: string, isChecked: boolean, handleChange }) {
    const { name, isChecked, handleChange } = props;

    return (
        <>
        <label htmlFor="nodejs">{String(name)}</label>
        <input type="checkbox" name={name} id={'inptut-check-'+name} checked={isChecked} onChange={(e)=>handleChange(e)} />
        </>
    )
}
