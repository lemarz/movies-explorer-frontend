import './Navigation.css'
import {NavLink} from 'react-router-dom'
import navLinks from '../utils/navLinks'
import Profile from '../Profile/Profile'

function Navigation({isAuth, isBurgerOpened, onClickAccordion}) {
  return (
    <>
      {isAuth ? (
        <div className='navigation'>
          <div
            className={
              isBurgerOpened
                ? 'navigation__bar navigation__bar_active'
                : 'navigation__bar'
            }
            onClick={onClickAccordion}></div>
          <div
            className={
              isBurgerOpened
                ? 'navigation__menu-blur_active'
                : 'navigation__menu-blur_disabled'
            }>
            <nav
              className={
                isBurgerOpened
                  ? 'navigation__menu navigation__menu_active'
                  : 'navigation__menu'
              }>
              <ul className='navigation__menu-list'>
                <li className='navigation__menu-item navigation__menu-item_burger'>
                  <NavLink
                    className={({isActive}) =>
                      isActive
                        ? 'navigation__link navigation__link_active'
                        : 'navigation__link'
                    }
                    to='/'
                    onClick={onClickAccordion}>
                    Главная
                  </NavLink>
                </li>
                {navLinks.map((item, i) => {
                  return (
                    <li key={i} className='navigation__menu-item'>
                      <NavLink
                        className={({isActive}) =>
                          isActive
                            ? 'navigation__link navigation__link_active'
                            : 'navigation__link'
                        }
                        to={item.src}
                        onClick={onClickAccordion}>
                        {item.title}
                      </NavLink>
                    </li>
                  )
                })}
                <div
                  className='navigation__menu-item_burger navigation__menu-item_burger_profile'
                  onClick={onClickAccordion}>
                  <Profile />
                </div>
              </ul>
            </nav>
          </div>
          <div className='navigation_profile-container'>
            <Profile />
          </div>
        </div>
      ) : (
        <nav className='navigation__auth-container'>
          <ul className='navigation__auth-list'>
            <li className='navigation__auth-item'>
              <NavLink className='link' to='/signup'>
                Регистрация
              </NavLink>
            </li>
            <li className='navigation__auth-item'>
              <NavLink className='link navigation__auth-signin' to='/signin'>
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Navigation
