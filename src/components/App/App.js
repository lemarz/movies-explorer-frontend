import './App.css'
import Header from '../Header/Header'
import {useEffect, useState} from 'react'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
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
import InfoTooltip from '../InfoTooltip/InfoTooltip'
const headerRoutesArr = ['/', '/movies', '/saved-movies', '/profile']
const footerRoutesArr = ['/', '/movies', '/saved-movies']

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('jwt'))
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [isShortMovie, setIsShortMovie] = useState(false)
  const [savedMoviesList, setSavedMoviesList] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

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
          .catch(() => setIsTooltipOpen(true))
    }
  }, [isAuth])
  useEffect(() => {
    if (isAuth) {
      mainApi
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo)
        })
        .catch((err) => {
          console.error(err)
          setIsTooltipOpen(true)
          setIsAuth(false)
          err === 'Ошибка: 401' && localStorage.removeItem('jwt')
        })
    }
  }, [isAuth])
  useEffect(() => {
    mainApi
      .getUserMovies()
      .then((res) => setSavedMoviesList(res))
      .catch(console.error)

    const isShortMovie = localStorage.getItem('isShortMovie')
    isShortMovie && setIsShortMovie(!!isShortMovie)
  }, [])

  const handleSaveMovie = (movie) => {
    mainApi
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMoviesList([...savedMoviesList, newMovie])
      })
      .catch(() => setIsTooltipOpen(true))
    setIsLiked(!isLiked)
  }

  const handleDeleteMovie = (movie) => {
    const id =
      movie._id ||
      savedMoviesList.find((item) => item.movieId === movie.movieId)._id

    mainApi
      .deleteMovie(id)
      .then(() => {
        setSavedMoviesList((state) => state.filter((item) => item._id !== id))
      })
      .catch(() => setIsTooltipOpen(true))

    setIsLiked(!isLiked)
  }

  const handleClickAccordion = () => setIsBurgerOpened(!isBurgerOpened)
  const handleFilterMovies = () => {
    localStorage.setItem('isShortMovie', isShortMovie ? '' : 'true')
    setIsShortMovie(!isShortMovie)
  }
  const handleLogOut = () => {
    setIsAuth(false)
    localStorage.removeItem('jwt')
    localStorage.removeItem('requestValue')
    localStorage.removeItem('isShortMovie')
    localStorage.removeItem('moviesData')
    navigate('/signin')
  }
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
              <Route
                path='/movies'
                element={
                  <Movies
                    isShortMovie={isShortMovie}
                    handleFilterMovies={handleFilterMovies}
                    onDislike={handleDeleteMovie}
                    onLike={handleSaveMovie}
                    savedMoviesList={savedMoviesList}
                  />
                }
              />
              <Route
                path='/saved-movies'
                element={
                  <SavedMovies
                    isShortMovie={isShortMovie}
                    handleFilterMovies={handleFilterMovies}
                    savedMoviesList={savedMoviesList}
                    onDislike={handleDeleteMovie}
                    onLike={handleSaveMovie}
                  />
                }
              />
              <Route
                path='/profile'
                element={<Profile logOut={handleLogOut} />}
              />
            </Route>

            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
        {isComponentActive(footerRoutesArr) && <Footer />}
        <InfoTooltip
          isOpen={isTooltipOpen}
          onClick={() => setIsTooltipOpen(false)}
          message='Во время запроса произошла ошибка. Подождите и попробуйте ещё раз'
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
