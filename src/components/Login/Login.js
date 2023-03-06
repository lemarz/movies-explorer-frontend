import './Login.css'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {NavLink, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import mainApi from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Login({setIsAuth}) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

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
      })
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
        <Input title='E-mail' onChange={handleChangeEmail} />
        <Input title='Пароль' type='password' onChange={handleChangePassword} />
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
