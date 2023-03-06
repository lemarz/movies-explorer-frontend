import './Portfolio.css'
const portfolioProjects = [
  {title: 'Статичный сайт', src: 'https://github.com/lemarz/how-to-learn'},
  {title: 'Адаптивный сайт', src: 'https://github.com/lemarz/mesto'},
  {
    title: 'Одностраничное приложение',
    src: 'https://github.com/lemarz/react-mesto-auth',
  },
]

function Portfolio() {
  return (
    <div className='portfolio'>
      <p className='portfolio__header'>Портфолио</p>
      <ul className='portfolio__list'>
        {portfolioProjects.map((item, i) => {
          return (
            <li key={i} className='portfolio__project'>
              <a
                className='link'
                href={item.src}
                target={'_blank'}
                rel='noreferrer'>
                {item.title} <span className='portfolio__project-span'>↗</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Portfolio
