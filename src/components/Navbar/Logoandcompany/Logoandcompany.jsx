import { NavLink, Link } from 'react-router-dom'
import sprite from '../../../images/svg/sprite.svg'
import s from './Logoandcompany.module.scss'

const Logoandcompany = ({ company }) => {
  return (
    <div>
      <NavLink to="/" className={s.logoandcompany}>
        <svg className={s.menuList__item__logo}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>

        <h2 className={s.logoandcompany__title}>{company}</h2>
      </NavLink>
    </div>
  )
}

export default Logoandcompany
