import './Register.css'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {NavLink, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import mainApi from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import isEmail from 'validator/lib/isEmail'

function Register({setIsAuth}) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isValid, setIsValid] = useState(false)

  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
  const [tooltipMessage, setTooltipMessage] = useState()

  useEffect(() => {
    isEmail(email) && password.length >= 8
      ? setIsValid(true)
      : setIsValid(false)
  }, [email, password])

  const closeTooltip = () => {
    setIsTooltipOpen(false)
    if (isRegisterSuccess) {
      setIsAuth(true)
      navigate('/movies')
    }
  }

  const handleSubmitRegister = () => {
    mainApi
      .register(name, email.toLowerCase(), password)
      .then(() => {
        mainApi
          .authorization(email.toLowerCase(), password)
          .then((res) => {
            setIsRegisterSuccess(true)
            localStorage.setItem('jwt', res.token)
            setIsTooltipOpen(true)
          })
          .catch((err) => {
            console.error(err)
            setIsTooltipOpen(true)
            setIsRegisterSuccess(false)
          })
      })
      .catch((err) => {
        console.error(err)
        if (err === 'Ошибка: 409') {
          setTooltipMessage('Такой пользователь уже существует')
        }
        setIsTooltipOpen(true)
        setIsRegisterSuccess(false)
      })
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
    e.target.value.length >= 2
      ? setNameError('')
      : setNameError('Имя слишком короткое.')
  }

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

  return (
    <section className='register'>
      <Form
        isButtonDisabled={!isValid}
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
        <Input title='Имя' onChange={handleChangeName} errorText={nameError} />
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
        isSuccess={isRegisterSuccess}
        message={tooltipMessage}
      />
    </section>
  )
}

export default Register
