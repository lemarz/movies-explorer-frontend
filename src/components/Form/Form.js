import './Form.css'
import logo from '../../images/logo.svg'

function Form({children, title, submitButtonText, onSubmit, formAssist}) {
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className='form'>
      <img className='form__logo' src={logo} alt='Логотип' />
      <h2 className='form__title'>{title}</h2>
      <form className='form__form'>
        {children}
        <button
          className='form__submit-button'
          type='submit'
          onClick={onFormSubmit}>
          {submitButtonText}
        </button>
        {formAssist}
      </form>
    </div>
  )
}

export default Form
