import './InfoTooltip.css'
import failureImg from '../../images/fail.svg'
import successImg from '../../images/success.svg'

function InfoTooltip({isSuccess, isOpen, onClick, successMessage}) {
  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`}>
      <div className='popup__container'>
        {isSuccess ? (
          <>
            <img className='popup__image' src={successImg} />
            <p className='popup__text'>
              {successMessage
                ? successMessage
                : 'Вы успешно зарегистрировались!'}
            </p>
          </>
        ) : (
          <>
            <img className='popup__image' src={failureImg} />
            <p className='popup__text'>
              Что-то пошло не так! Попробуйте ещё раз.
            </p>
          </>
        )}
        <button className='popup__close-button' onClick={onClick}></button>
      </div>
    </div>
  )
}

export default InfoTooltip
