import './Login.css'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {NavLink} from 'react-router-dom'

function Login() {
  const handleSubmitLogin = (e) => {
    e.preventDefault()
  }
  return (
    <section className='login'>
      <Form
        title='Рады видеть!'
        submitButtonText='Войти'
        onSubmit={handleSubmitLogin}
        formAssist={
          <p className='login__assist'>
            Ещё не зарегистрированы?&nbsp;&nbsp;
            <NavLink className='link login__assist-link' to='/signup'>
              Регистрация
            </NavLink>
          </p>
        }>
        <Input title='E-mail' defaultValue='pochta@yandex.ru' />
        <Input title='Пароль' type='password' />
      </Form>
    </section>
  )
}

export default Login
