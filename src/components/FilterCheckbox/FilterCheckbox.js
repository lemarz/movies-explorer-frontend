import './FilterCheckbox.css'

function FilterCheckbox({isShortMovies, onChange}) {
  return (
    <form className='filter-checkbox'>
      <input
        className='filter-checkbox__input'
        type='checkbox'
        onChange={onChange}
        checked={isShortMovies}></input>
      <span className='filter-checkbox__text'>Короткометражки</span>
    </form>
  )
}

export default FilterCheckbox
