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
      {portfolioProjects.map((item, i) => {
        return (
          <a
            key={i}
            className='portfolio__project link'
            href={item.src}
            target={'_blank'}
            rel='noreferrer'>
            {item.title} <span className='portfolio__project-span'>↗</span>
          </a>
        )
      })}
    </div>
  )
}

export default Portfolio
