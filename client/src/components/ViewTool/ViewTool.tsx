export default function ViewTool(props: { name: string, isChecked: boolean, handleChange }) {
    const { name, isChecked, handleChange } = props;

    return (
        <>
        <input className="hidden-checkbox" type="checkbox" name={name} id={'input-check-' + name} checked={isChecked} onChange={(e)=>handleChange(e)} />
        <label className="hidden-checkbox-label" htmlFor={'input-check-' + name}>{String(name)}</label>
        </>
    )
}
