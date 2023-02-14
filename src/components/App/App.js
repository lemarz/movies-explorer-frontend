import './App.css'
import Header from '../Header/Header'
import {useState} from 'react'

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
        />
      </div>
    </div>
  )
}

export default App
