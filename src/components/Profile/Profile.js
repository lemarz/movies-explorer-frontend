import './Profile.css'

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>

      <div className='profile__info'>
        <div className='profile__credentials-container'>
          <p className='profile__credential-type'>Имя</p>
          <p className='profile__credential-data'>Виталий</p>
        </div>
        <div className='profile__credentials-container'>
          <p className='profile__credential-type'>E-mail</p>
          <p className='profile__credential-data'>pochta@yandex.ru</p>
        </div>
      </div>
      <button className='profile__button'>Редактировать</button>
      <button className='profile__button'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile
