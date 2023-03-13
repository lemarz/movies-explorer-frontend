import './Login.css'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {NavLink, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import mainApi from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import isEmail from 'validator/lib/isEmail'

function Login({setIsAuth}) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [isValid, setIsValid] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  useEffect(() => {
    isEmail(email) && password.length >= 8
      ? setIsValid(true)
      : setIsValid(false)
  }, [email, password])

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    isEmail(e.target.value)
      ? setEmailError('')
      : setEmailError('Некорректый адрес почты.')
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
    e.target.value.length >= 8
      ? setPasswordError('')
      : setPasswordError('Пароль слишком короткий.')
  }

  const closeTooltip = () => setIsTooltipOpen(false)

  const handleSubmitLogin = () => {
    mainApi
      .authorization(email, password)
      .then((res) => {
        setIsAuth(true)
        localStorage.setItem('jwt', res.token)
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
        setIsTooltipOpen(true)
        document.forms[0].reset()
      })
  }
  return (
    <section className='login'>
      <Form
        isButtonDisabled={!isValid}
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
        <Input
          title='E-mail'
          onChange={handleChangeEmail}
          errorText={emailError}
        />
        <Input
          title='Пароль'
          type='password'
          onChange={handleChangePassword}
          errorText={passwordError}
        />
      </Form>
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClick={closeTooltip}
        isSuccess={false}
      />
    </section>
  )
}

export default Login
