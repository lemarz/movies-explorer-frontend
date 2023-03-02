import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import moviesData from '../../utils/moviesData'

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList moviesArr={moviesData} />
    </section>
  )
}

export default Movies
