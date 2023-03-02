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
    <div className='App'>
      <div className='page'>
        {isComponentActive(headerRoutesArr) && (
          <Header
            isAuth={isAuth}
            isBurgerOpened={isBurgerOpened}
            onClickAccordion={handleClickAccordion}
          />
        )}
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/signup' element={<Register />}></Route>
          <Route path='/signin' element={<Login />}></Route>
        </Routes>
      </div>
      {isComponentActive(footerRoutesArr) && <Footer />}
    </div>
  )
}

export default App
