import './MoviesCard.css'
import {useLocation} from 'react-router-dom'
import {getFormattedTime} from '../../utils/utils'

function MoviesCard({movie, isLiked, onLike, onDislike}) {
  const location = useLocation()

  const handleLikeMovie = () => onLike(movie)
  const handleDislikeMovie = () => onDislike(movie)

  return (
    <li className='movies-card'>
      <a
        className='movies-card__link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'>
        <img
          className='movies-card__image'
          alt='Обложка фильма'
          src={movie.image}
        />
      </a>
      <div className='movies-card__about'>
        <p className='movies-card__title'>{movie.nameRU}</p>
        <p className='movies-card__duration'>
          {getFormattedTime(movie.duration)}
        </p>
        {location.pathname === '/movies' && (
          <button
            className={
              isLiked
                ? 'movies-card__like movies-card__like_active'
                : 'movies-card__like'
            }
            onClick={isLiked ? handleDislikeMovie : handleLikeMovie}
          />
        )}
        {location.pathname === '/saved-movies' && (
          <button
            className={'movies-card__like movies-card__like_active'}
            onClick={handleDislikeMovie}>
            <div className='test'></div>
          </button>
        )}
      </div>
    </li>
  )
}

export default MoviesCard
