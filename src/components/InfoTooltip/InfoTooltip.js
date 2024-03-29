import './InfoTooltip.css'
import failureImg from '../../images/fail.svg'
import successImg from '../../images/success.svg'

function InfoTooltip({isSuccess, isOpen, onClick, message}) {
  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`}>
      <div className='popup__container'>
        {isSuccess ? (
          <>
            <img className='popup__image' src={successImg} alt='Успех' />
            <p className='popup__text'>
              {message ? message : 'Вы успешно зарегистрировались!'}
            </p>
          </>
        ) : (
          <>
            <img className='popup__image' src={failureImg} alt='Провал' />
            <p className='popup__text'>
              {message ? message : 'Что-то пошло не так! Попробуйте ещё раз.'}
            </p>
          </>
        )}
        <button className='popup__close-button' onClick={onClick}></button>
      </div>
    </div>
  )
}

export default InfoTooltip
