import './Profile.css'
import {useContext, useState} from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import {useNavigate} from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import mainApi from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Profile({setIsAuth}) {
  const navigate = useNavigate()
  const currentUser = useContext(CurrentUserContext)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

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

  const onEditUserInfo = () => {
    setName(currentUser.name)
    setEmail(currentUser.email)
    setIsEditMode(true)
  }

  const editUserInfo = (e) => {
    e.preventDefault()
    mainApi
      .setUserInfo(name, email)
      .then(() => {
        setIsTooltipOpen(true)
      })
      .catch(console.error)
    setIsEditMode(false)
  }

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('jwt')
    navigate('/signin')
  }
  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>

      <form className='profile__info'>
        <div className='profile__credentials-container'>
          <p className='profile__credential-type'>Имя</p>
          <input
            className='profile__credential-data'
            defaultValue={currentUser.name}
            disabled={!isEditMode}
            onChange={handleChangeName}
          />
          <span className='profile__credential-error'>{nameError}</span>
        </div>
        <div className='profile__credentials-container'>
          <p className='profile__credential-type'>E-mail</p>
          <input
            className='profile__credential-data'
            defaultValue={currentUser.email}
            disabled={!isEditMode}
            onChange={handleChangeEmail}
          />
          <span className='profile__credential-error'>{emailError}</span>
        </div>
      </form>
      {isEditMode ? (
        <button
          className='profile__button profile__button_save link'
          type='submit'
          onClick={editUserInfo}>
          Сохранить
        </button>
      ) : (
        <button className='profile__button link' onClick={onEditUserInfo}>
          Редактировать
        </button>
      )}
      <button className='profile__button link' onClick={logOut}>
        Выйти из аккаунта
      </button>
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClick={() => setIsTooltipOpen(false)}
        isSuccess={true}
        successMessage='Данные о профиле успешно изменены!'
      />
    </section>
  )
}

export default Profile
