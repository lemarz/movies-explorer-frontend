import './Form.css'
import logo from '../../images/logo.svg'

function Form({children, title, submitButtonText, onSubmit, formAssist}) {
  return (
    <div className='form'>
      <img className='form__logo' src={logo} alt='Логотип' />
      <h2 className='form__title'>{title}</h2>
      <form></form>
      <form className='form__form'>{children}</form>
      <button className='form__submit-button' type='submit' onClick={onSubmit}>
        {submitButtonText}
      </button>
      {formAssist}
    </div>
  )
}

export default Form
