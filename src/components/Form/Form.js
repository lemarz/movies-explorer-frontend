import './Form.css'
import logo from '../../images/logo.svg'

function Form({
  children,
  title,
  submitButtonText,
  onSubmit,
  formAssist,
  isButtonDisabled,
}) {
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className='form'>
      <img className='form__logo' src={logo} alt='Логотип' />
      <h2 className='form__title'>{title}</h2>
      <form className='form__form' onSubmit={onFormSubmit}>
        {children}
        <button
          className={`form__submit-button ${
            isButtonDisabled && 'form__submit-button_disabled'
          }`}
          type='submit'
          disabled={isButtonDisabled}>
          {submitButtonText}
        </button>
        {formAssist}
      </form>
    </div>
  )
}

export default Form
