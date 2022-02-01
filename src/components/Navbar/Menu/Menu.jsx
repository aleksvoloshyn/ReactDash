import { NavLink, Link } from 'react-router-dom'
import sprite from '../../../images/svg/sprite.svg'
import s from './Menu.module.scss'

const menuItems = [
  { id: 1, title: 'dashboard' },
  { id: 2, title: 'analytics' },
  { id: 3, title: 'invoice' },
  { id: 4, title: 'schedule' },
  { id: 5, title: 'calendar' },
  { id: 6, title: 'messages' },
  { id: 7, title: 'notification' },
  { id: 8, title: 'setting' },
]

const Menu = () => {
  let activeClassName = 'underline'
  return (
    <div className={s.menu}>
      <ul className={s.menuList}>
        {menuItems.map((item) => (
          <li className={s.menuList__item} key={item.id}>
            <NavLink
              to={item.title}
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              <svg className={s.menuList__item__logo}>
                <use xlinkHref={`${sprite}#${item.title}`} />
              </svg>
              <p className={s.menuList__item__title}> {item.title} </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
