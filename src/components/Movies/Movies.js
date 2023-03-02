import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import moviesData from '../../utils/moviesData'

function Movies() {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList moviesArr={moviesData} />
    </div>
  )
}

export default Movies
