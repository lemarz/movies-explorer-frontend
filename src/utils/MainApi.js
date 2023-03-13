class MainApi {
  constructor() {
    this._baseUrl = 'http://movies-explorer.space'
    this._headers = {'Content-Type': 'application/json'}
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt')
    return {
      Authorization: `Bearer ${jwt}`,
      ...this._headers,
    }
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._handleResponse)
  }

  authorization(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._handleResponse)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(),
    }).then(this._handleResponse)
  }

  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._handleResponse)
  }

  getUserMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
      credentials: 'include',
    }).then(this._handleResponse)
  }

  createMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: movieData.image,
        trailerLink: movieData.trailerLink,
        thumbnail: movieData.thumbnail,
        movieId: movieData.movieId,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
      }),
      credentials: 'include',
    }).then(this._handleResponse)
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
      credentials: 'include',
    }).then(this._handleResponse)
  }
}

const mainApi = new MainApi()

export default mainApi
