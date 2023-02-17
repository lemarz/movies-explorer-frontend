import './AboutMe.css'
import studentImage from '../../images/student.png'

function AboutMe() {
  return (
    <div className='about-me' id='about-me'>
      <h2 className='about-me__header'>Студент</h2>
      <div className='about-me__content'>
        <div className='about-me__description'>
          <h3 className='about-me__title'>Виталий</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__github-link link'
            href='https://github.com/lemarz'
            target={'_blank'}
            rel='noreferrer'>
            Github
          </a>
        </div>
        <img
          className='about-me__image'
          src={studentImage}
          alt='Фотография студента'></img>
      </div>
    </div>
  )
}

export default AboutMe
