import './Profile.css'
import {NavLink} from 'react-router-dom'

function Profile() {
  return (
    <div className='profile'>
      <NavLink className='profile__link' to='/profile'>
        Аккаунт
      </NavLink>
    </div>
  )
}

export default Profile
