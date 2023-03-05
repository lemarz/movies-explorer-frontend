import './NotFound.css'
import {NavLink} from 'react-router-dom'

function NotFound() {
  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <NavLink className='link not-found__link' to='/'>
        Назад
      </NavLink>
    </section>
  )
}

export default NotFound
