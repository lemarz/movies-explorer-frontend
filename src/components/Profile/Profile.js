import './Profile.css'
import {useContext} from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import {useNavigate} from 'react-router-dom'

function Profile({setIsAuth}) {
  const navigate = useNavigate()
  const currentUser = useContext(CurrentUserContext)

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('jwt')
    navigate('/signin')
  }
  return (
    <section className='profile'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>

      <div className='profile__info'>
        <div className='profile__credentials-container'>
          <p className='profile__credential-type'>Имя</p>
          <p className='profile__credential-data'>{currentUser.name}</p>
        </div>
        <div className='profile__credentials-container'>
          <p className='profile__credential-type'>E-mail</p>
          <p className='profile__credential-data'>{currentUser.email}</p>
        </div>
      </div>
      <button className='profile__button'>Редактировать</button>
      <button className='profile__button' onClick={logOut}>
        Выйти из аккаунта
      </button>
    </section>
  )
}

export default Profile
