import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({
  isShortMovies,
  handleFilterMovies,
  request,
  onChangeRequest,
  onSubmit,
  defaultValue,
  isRequired,
}) {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <input
          className='search-form__input'
          required={isRequired}
          placeholder='Фильм'
          onInput={onChangeRequest}
          defaultValue={defaultValue}
        />
        <button
          className={`search-form__button ${
            !request && isRequired && 'search-form__button_disabled'
          } `}
          disabled={!request && isRequired}
          onClick={onSubmit}>
          Найти
        </button>
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
