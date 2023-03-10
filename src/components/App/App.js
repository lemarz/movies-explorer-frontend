import './App.css'
import Header from '../Header/Header'
import {useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import SavedMovies from '../SavedMovies/SavedMovies'

function App() {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)

  const handleClickAccordion = () => setIsBurgerOpened(!isBurgerOpened)

  const headerRoutesArr = ['/', '/movies', '/saved-movies', '/profile']
  const footerRoutesArr = ['/', '/movies', '/saved-movies']

  const isComponentActive = (routesArr) => {
    return routesArr.some((route) => route === location.pathname)
  }

  return (
    <div className='app'>
      {isComponentActive(headerRoutesArr) && (
        <Header
          isAuth={isAuth}
          isBurgerOpened={isBurgerOpened}
          onClickAccordion={handleClickAccordion}
        />
      )}
      <div className='app__main'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/saved-movies' element={<SavedMovies />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signup' element={<Register />}></Route>
          <Route path='/signin' element={<Login />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </div>
      {isComponentActive(footerRoutesArr) && <Footer />}
    </div>
  )
}

export default App
