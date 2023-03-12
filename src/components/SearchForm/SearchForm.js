import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({
  isShortMovies,
  handleFilterMovies,
  request,
  onChangeRequest,
  onSubmit,
  defaultValue,
}) {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <input
          className='search-form__input'
          required={true}
          placeholder='Фильм'
          onChange={onChangeRequest}
          defaultValue={defaultValue}
        />
        <button
          className={
            request
              ? 'search-form__button'
              : 'search-form__button search-form__button_disabled'
          }
          disabled={!request}
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
