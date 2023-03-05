import './AccountButton.css'
import {NavLink} from 'react-router-dom'

function AccountButton() {
  return (
    <div className='account-button'>
      <NavLink className='account-button__link' to='/profile'>
        Аккаунт
      </NavLink>
    </div>
  )
}

export default AccountButton
