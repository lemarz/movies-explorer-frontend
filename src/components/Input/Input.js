import './Input.css'

function Input({title, type, placeholder, defaultValue, errorText, onChange}) {
  return (
    <>
      <p className='input__title'>{title}</p>
      <input
        className='input__field'
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className='input__error'>{errorText}</span>
    </>
  )
}

export default Input
