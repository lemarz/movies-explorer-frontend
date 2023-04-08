import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import {useEffect, useState} from 'react'
import {useWindowWidth} from '../../hooks/useWindowWidth'
import {isMovieSaved} from '../../utils/utils'

function MoviesCardList({
  moviesArr,
  isShortMovie,
  onLike,
  onDislike,
  savedMoviesList,
}) {
  const windowWidth = useWindowWidth()
  const [cardsNumber, setCardsNumber] = useState(null)
  const [cardsNumberToAdd, setCardsNumberToAdd] = useState(null)

  useEffect(() => {
    let cardsNumber, cardsNumberToAdd
    if (windowWidth >= 1280) {
      cardsNumber = 12
      cardsNumberToAdd = 3
    } else if (windowWidth >= 768) {
      cardsNumber = 8
      cardsNumberToAdd = 2
    } else {
      cardsNumber = 5
      cardsNumberToAdd = 2
    }
    setCardsNumber(cardsNumber)
    setCardsNumberToAdd(cardsNumberToAdd)
  }, [windowWidth])

  const getMoreCards = () => setCardsNumber(cardsNumber + cardsNumberToAdd)

  return (
    <div className='movies-card-list'>
      <ul className='movies-card-list__cards'>
        {moviesArr.length
          ? (isShortMovie
              ? moviesArr.filter((movie) => movie.duration <= 40)
              : moviesArr
            ).map((movie, i) => {
              if (i < cardsNumber) {
                return (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    isLiked={isMovieSaved(savedMoviesList, movie)}
                    onLike={onLike}
                    onDislike={onDislike}
                  />
                )
              }
              return null
            })
          : 'Ничего не найдено'}
      </ul>
      {isShortMovie
        ? moviesArr.filter((movie) => movie.duration <= 40).length >
            cardsNumber && (
            <button
              className='movies-card-list__more-movies'
              onClick={getMoreCards}>
              Ещё
            </button>
          )
        : moviesArr.length > cardsNumber && (
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
