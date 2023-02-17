import './AboutProject.css'

function AboutProject() {
  return (
    <div className='about-project' id='about-project'>
      <h2 className='about-project__header'>О проекте</h2>
      <div className='about-project__card-container'>
        <div className='about-project__card'>
          <h3 className='about-project__card-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__card-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className='about-project__card'>
          <h3 className='about-project__card-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__card-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__timeline-backend'>
          <p className='about-project__timeline-title'>1 неделя</p>
          <p className='about-project__timeline-subtitle'>Back-end</p>
        </div>
        <div className='about-project__timeline-frontend'>
          <p className='about-project__timeline-title'>4 недели</p>
          <p className='about-project__timeline-subtitle'>Front-end</p>
        </div>
      </div>
    </div>
  )
}

export default AboutProject
