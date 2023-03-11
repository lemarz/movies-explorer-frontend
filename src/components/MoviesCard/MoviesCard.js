import './MoviesCard.css'
import {useState} from 'react'

const getFormattedTime = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours}ч${remainingMinutes === 0 ? '' : ` ${remainingMinutes}м`}`
}

function MoviesCard({
  movieImageUrl,
  movieTitle,
  movieDuration,
  isSaved,
  trailerLink,
}) {
  const [isLiked, setIsLiked] = useState(isSaved)
  return (
    <li className='movies-card'>
      <a
        className='movies-card__link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'>
        <img
          className='movies-card__image'
          alt='Обложка фильма'
          src={movieImageUrl}
        />
      </a>
      <div className='movies-card__about'>
        <p className='movies-card__title'>{movieTitle}</p>
        <p className='movies-card__duration'>
          {getFormattedTime(movieDuration)}
        </p>
        <button
          className={
            isLiked
              ? 'movies-card__like movies-card__like_active'
              : 'movies-card__like'
          }
          onClick={() => setIsLiked(!isLiked)}></button>
      </div>
    </li>
  )
}

export default MoviesCard
