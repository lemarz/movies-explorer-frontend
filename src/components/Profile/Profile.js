import './Profile.css'
import {useContext, useEffect, useState} from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import isEmail from 'validator/lib/isEmail'
import mainApi from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Profile({logOut}) {
  const currentUser = useContext(CurrentUserContext)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [tooltipMessage, setTooltipMessage] = useState('')
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    setIsSaveButtonActive(
      name !== currentUser.name ||
        email.toLowerCase() !== currentUser.email.toLowerCase()
    )
  }, [name, email])

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
    if (
      name !== currentUser.name ||
      email !== currentUser.email.toLowerCase()
    ) {
      mainApi
        .setUserInfo(name, email.toLowerCase())
        .then(() => {
          currentUser.name = name
          currentUser.email = email.toLowerCase()
          setIsSuccess(true)
          setTooltipMessage('Данные о профиле успешно изменены!')
          setIsTooltipOpen(true)
          setIsSaveButtonActive(false)
        })
        .catch((err) => {
          console.error(err)
          if (err === 'Ошибка: 409') {
            setTooltipMessage('Такой пользователь уже существует.')
          }
          setIsSuccess(false)
          setIsTooltipOpen(true)
        })
    }
    setIsEditMode(false)
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
          className={`profile__button profile__button_save  ${
            !isSaveButtonActive ? 'profile__button_disabled' : 'link'
          }`}
          type='submit'
          onClick={editUserInfo}
          disabled={!isSaveButtonActive}>
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
        isSuccess={isSuccess}
        message={tooltipMessage}
      />
    </section>
  )
}

export default Profile
