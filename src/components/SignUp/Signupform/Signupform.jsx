import sprite from '../../../images/svg/sprite.svg'
import s from './Signupform.module.scss'

const Signupform = ({ logotitle = 'Sign up' }) => {
  return (
    <div className={s.signupform}>
      <div className={s.signupform__header}>
        <svg className={s.menuList__item__logo}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
        <h2>{logotitle}</h2>
        <div className={s.signupform__buttons}>
          <button>Google</button>
          <button>Facebook</button>
        </div>
      </div>

      <div className={s.signupform__form}>
        <form action=""></form>
      </div>
    </div>
  )
}

export default Signupform
