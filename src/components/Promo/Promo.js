import './Promo.css'
const navAnchors = [
  {title: 'О проекте', id: '#about-project'},
  {title: 'Технологии', id: '#techs'},
  {title: 'Студент', id: '#about-me'},
]

function Promo() {
  return (
    <div className='promo'>
      <h1 className='promo__header'>
        Учебный проект студента <br className='promo__header_line-break' />{' '}
        факультета Веб-разработки.
      </h1>
      <nav className='promo__navigation'>
        {navAnchors.map((item, i) => {
          return (
            <a key={i} className='promo__navigation-button' href={item.id}>
              {item.title}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default Promo
