import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import moviesData from '../../utils/moviesData'

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <SearchForm />
      <MoviesCardList moviesArr={moviesData.slice(10, 13)} />
    </div>
  )
}

export default SavedMovies
