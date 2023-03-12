import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import {useEffect, useState} from 'react'
import Preloader from '../Preloader/Preloader'
import moviesApi from '../../utils/MoviesApi'
import {sortMoviesData} from '../../utils/utils'

function Movies({
  isShortMovie,
  handleFilterMovies,
  onLike,
  onDislike,
  savedMoviesList,
}) {
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const moviesData = localStorage.getItem('moviesData')
    moviesData && setMoviesList(JSON.parse(moviesData))

    const requestInputValue = localStorage.getItem('requestValue')
    requestInputValue && setSearchQuery(requestInputValue)
  }, [])

  const [searchQuery, setSearchQuery] = useState(``)
  const handleChangeRequest = (e) => setSearchQuery(e.target.value)

  const [isPreloaderActive, setIsPreloaderActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPreloaderActive(true)
    localStorage.setItem('requestValue', searchQuery)
    moviesApi
      .getMovies()
      .then((moviesData) =>
        moviesData.filter((movie) =>
          movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .then((rawMoviesData) => sortMoviesData(rawMoviesData))
      .then((moviesData) => {
        localStorage.setItem('moviesData', JSON.stringify(moviesData))
        setMoviesList(moviesData)
        setIsPreloaderActive(false)
      })
      .catch(console.error)
  }

  return (
    <section className='movies'>
      <SearchForm
        isShortMovies={isShortMovie}
        handleFilterMovies={handleFilterMovies}
        request={searchQuery}
        onSubmit={handleSubmit}
        onChangeRequest={handleChangeRequest}
        defaultValue={searchQuery}
      />
      {isPreloaderActive ? (
        <Preloader />
      ) : (
        <MoviesCardList
          moviesArr={moviesList}
          isShortMovie={isShortMovie}
          onLike={onLike}
          onDislike={onDislike}
          savedMoviesList={savedMoviesList}
        />
      )}
    </section>
  )
}

export default Movies
