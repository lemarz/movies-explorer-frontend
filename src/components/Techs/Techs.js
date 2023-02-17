import './Techs.css'
const techsStack = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
]

function Techs() {
  return (
    <div className='techs' id='techs'>
      <h2 className='techs__header'>Технологии</h2>
      <div className='techs__content'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className='techs__stack'>
        {techsStack.map((item, i) => {
          return (
            <p key={i} className='techs__stack-item'>
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Techs
