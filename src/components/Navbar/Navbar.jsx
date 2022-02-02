import Logoandcompany from './Logoandcompany/Logoandcompany'
import Menu from './Menu'
import Userinfo from './Userinfo'
import Upgrate from './Upgrate'
import s from './Navbar.module.scss'
const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.topBlock}>
        <Logoandcompany company="Base" />
        <Menu />
      </div>
      <div className={s.bottomBlock}>
        <Upgrate />
        <Userinfo />
      </div>
    </nav>
  )
}

export default Navbar
