import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import {useEffect, useState} from 'react'
import {useWindowWidth} from '../../hooks/useWindowWidth'

function MoviesCardList({moviesArr}) {
  const [cardsNumber, setCardsNumber] = useState(null)
  const [cardsNumberToAdd, setCardsNumberToAdd] = useState(null)

  const windowWidth = useWindowWidth()
  useEffect(() => {
    if (windowWidth >= 1280) {
      setCardsNumber(12)
      setCardsNumberToAdd(3)
    }
    if (windowWidth < 1280) {
      setCardsNumber(8)
      setCardsNumberToAdd(2)
    }
    if (windowWidth < 768) {
      setCardsNumber(5)
      setCardsNumberToAdd(2)
    }
  }, [windowWidth])

  const getMoreCards = () => setCardsNumber(cardsNumber + cardsNumberToAdd)

  return (
    <div className='movies-card-list'>
      <ul className='movies-card-list__cards'>
        {moviesArr.map((item, i) => {
          if (i < cardsNumber) {
            return (
              <MoviesCard
                key={item.id}
                movieTitle={item.nameRU}
                movieImageUrl={`https://api.nomoreparties.co${item.image.url}`}
                movieDuration={item.duration}
                isSaved={Math.floor(Math.random() * 2)}
              />
            )
          }
          return null
        })}
      </ul>
      {moviesArr.length >= cardsNumber && (
        <button
          className='movies-card-list__more-movies'
          onClick={getMoreCards}>
          Ещё
        </button>
      )}
    </div>
  )
}

export default MoviesCardList
