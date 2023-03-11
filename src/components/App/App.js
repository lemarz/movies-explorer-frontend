import './App.css'
import Header from '../Header/Header'
import {useEffect, useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'
import SavedMovies from '../SavedMovies/SavedMovies'
import mainApi from '../../utils/MainApi'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
const headerRoutesArr = ['/', '/movies', '/saved-movies', '/profile']
const footerRoutesArr = ['/', '/movies', '/saved-movies']

function App() {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(false)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    if (!isAuth) {
      const token = localStorage.getItem('jwt')
      token &&
        mainApi
          .getUserInfo()
          .then((userInfo) => {
            setIsAuth(true)
            setCurrentUser(userInfo)
          })
          .catch(console.error)
    }
  }, [])

  useEffect(() => {
    if (isAuth) {
      mainApi
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo)
        })
        .catch(console.error)
    }
  }, [isAuth])

  const handleClickAccordion = () => setIsBurgerOpened(!isBurgerOpened)
  const isComponentActive = (routesArr) => {
    return routesArr.some((route) => route === location.pathname)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Route path='/' element={<Main />} />
            <Route element={<ProtectedRoute isAuth={isAuth} />}>
              <Route path='/movies' element={<Movies />} />
              <Route path='/saved-movies' element={<SavedMovies />} />
              <Route
                path='/profile'
                element={<Profile setIsAuth={setIsAuth} />}
              />
            </Route>

            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
        {isComponentActive(footerRoutesArr) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
