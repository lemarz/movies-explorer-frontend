import './App.css'
import Header from '../Header/Header'
import {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)

  const handleClickAccordion = () => setIsBurgerOpened(!isBurgerOpened)

  return (
    <div className='App'>
      <div className='page'>
        <Header
          isAuth={isAuth}
          isBurgerOpened={isBurgerOpened}
          onClickAccordion={handleClickAccordion}
        />{' '}
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
