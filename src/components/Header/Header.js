import './Header.css'
import logo from '../../images/logo.svg'
import {NavLink} from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

function Header({isAuth, isBurgerOpened, onClickAccordion}) {
  return (
    <div className='header'>
      <div className='header__container'>
        <NavLink to='/'>
          <img className='header__logo' src={logo} alt='Логотип' />
        </NavLink>
        <Navigation
          isAuth={isAuth}
          isBurgerOpened={isBurgerOpened}
          onClickAccordion={onClickAccordion}
        />
      </div>
    </div>
  )
}

export default Header
