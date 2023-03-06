import './Register.css'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {NavLink, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import mainApi from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)

  const closeTooltip = () => {
    setIsTooltipOpen(false)
    isRegisterSuccess && navigate('/signin')
  }

  const handleSubmitRegister = () => {
    mainApi
      .register(name, email, password)
      .then(() => {
        setIsRegisterSuccess(true)
        setIsTooltipOpen(true)
      })
      .catch((err) => {
        console.error(err)
        setIsTooltipOpen(true)
        setIsRegisterSuccess(false)
      })
  }

  const handleChangeName = (e) => setName(e.target.value)
  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

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
        <Input title='Имя' onChange={handleChangeName} />
        <Input title='E-mail' onChange={handleChangeEmail} />
        <Input title='Пароль' type='password' onChange={handleChangePassword} />
      </Form>
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClick={closeTooltip}
        isSuccess={isRegisterSuccess}
      />
    </section>
  )
}

export default Register
