import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import {useState} from 'react'

function SavedMovies({savedMoviesList, onLike, onDislike}) {
  const [isShortMovie, setIsShortMovie] = useState(false)
  const [searchQuery, setSearchQuery] = useState(``)
  const [currentMovies, setCurrentMovies] = useState([])

  const handleFilterMovies = () => setIsShortMovie(!isShortMovie)
  const handleChangeRequest = (e) => setSearchQuery(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const queryMovies = savedMoviesList.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setCurrentMovies(queryMovies)
  }

  return (
    <section className='saved-movies'>
      <SearchForm
        isShortMovies={isShortMovie}
        handleFilterMovies={handleFilterMovies}
        onChangeRequest={handleChangeRequest}
        onSubmit={handleSubmit}
      />
      <MoviesCardList
        moviesArr={!!currentMovies.length ? currentMovies : savedMoviesList}
        isShortMovie={isShortMovie}
        onDislike={onDislike}
        onLike={onLike}
        savedMoviesList={savedMoviesList}
      />
    </section>
  )
}

export default SavedMovies
