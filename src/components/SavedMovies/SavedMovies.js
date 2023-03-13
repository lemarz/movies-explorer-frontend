import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies({
  isShortMovie,
  handleFilterMovies,
  savedMoviesList,
  onLike,
  onDislike,
}) {
  return (
    <section className='saved-movies'>
      <SearchForm
        isShortMovies={isShortMovie}
        handleFilterMovies={handleFilterMovies}
      />
      <MoviesCardList
        moviesArr={savedMoviesList}
        isShortMovie={isShortMovie}
        onDislike={onDislike}
        onLike={onLike}
        savedMoviesList={savedMoviesList}
      />
    </section>
  )
}

export default SavedMovies
