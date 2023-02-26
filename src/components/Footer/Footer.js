import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h4 className='footer__about'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className='footer__container'>
        <p className='footer__copyright'>
          &copy; {new Date().getFullYear()} Leonid Goniyants
        </p>
        <a
          className='footer__link link'
          href='https://practicum.yandex.ru/'
          target={'_blank'}
          rel='noreferrer'>
          Яндекс.Практикум
        </a>
        <a
          className='footer__link link'
          href='https://github.com/'
          target={'_blank'}
          rel='noreferrer'>
          Github
        </a>
      </div>
    </div>
  )
}

export default Footer
