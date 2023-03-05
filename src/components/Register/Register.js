import './Register.css'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {NavLink} from 'react-router-dom'

function Register() {
  const handleSubmitRegister = (e) => {
    e.preventDefault()
  }

  return (
    <section className='register'>
      <Form
        title='Добро пожаловать!'
        submitButtonText='Зарегистрироваться'
        onSubmit={handleSubmitRegister}
        formAssist={
          <p className='register__assist'>
            Уже зарегистрированы?&nbsp;&nbsp;
            <NavLink className='link register__assist-link' to='/signin'>
              Войти
            </NavLink>
          </p>
        }>
        <Input title='Имя' defaultValue='Виталий' />
        <Input title='E-mail' defaultValue='pochta@yandex.ru' />
        <Input
          title='Пароль'
          defaultValue='••••••••••••••'
          type='password'
          errorText='Что-то пошло не так'
        />
      </Form>
    </section>
  )
}

export default Register
