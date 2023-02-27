import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import {useState} from 'react'

function SearchForm() {
  const [isShortMovies, setIsShortMovies] = useState(true)
  const handleFilterMovies = () => setIsShortMovies(!isShortMovies)

  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <input className='search-form__input' placeholder='Фильм' />
        <button className='search-form__button'>Найти</button>
      </form>
      <div className='search-form_checkbox'>
        <FilterCheckbox
          isShortMovies={isShortMovies}
          onChange={handleFilterMovies}
        />
      </div>
    </div>
  )
}

export default SearchForm
