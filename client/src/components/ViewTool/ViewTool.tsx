export default function ViewTool({name, isChecked, handleChange}) {

  return (
    <>
          <label htmlFor="nodejs">
            {name}:
            <input type="checkbox" name={name} id={'inptut-check-'+name} checked={isChecked} onChange={(e)=>handleChange(e)} />
          </label>
          </>
  )
}
