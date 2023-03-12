class MoviesApi {
  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies'
    this._headers = {'Content-Type': 'application/json'}
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then(this._handleResponse)
  }
}

const moviesApi = new MoviesApi()

export default moviesApi
