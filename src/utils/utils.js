const sortMoviesData = (moviesList) => {
  moviesList.forEach((movie) => {
    movie.movieId = movie.id
    movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
    movie.image = `https://api.nomoreparties.co${movie.image.url}`
  })
  return moviesList
}

const getFormattedTime = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours}ч${remainingMinutes === 0 ? '' : ` ${remainingMinutes}м`}`
}

const isMovieSaved = (savedMoviesList, movie) =>
  savedMoviesList?.find((item) => item.movieId === movie.movieId)

export {sortMoviesData, getFormattedTime, isMovieSaved}
