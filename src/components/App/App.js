import './App.css'
import Header from '../Header/Header'
import {useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'

function App() {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(true)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)

  const handleClickAccordion = () => setIsBurgerOpened(!isBurgerOpened)

  return (
    <div className='App'>
      <div className='page'>
        <Header
          isAuth={isAuth}
          isBurgerOpened={isBurgerOpened}
          onClickAccordion={handleClickAccordion}
        />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </div>
      {location.pathname !== '/profile' && <Footer />}
    </div>
  )
}

export default App
