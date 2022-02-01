import Logoandcompany from './Logoandcompany/Logoandcompany'
import Menu from './Menu'
import s from './Navbar.module.scss'
const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Logoandcompany company="Base" />
      <Menu />
    </nav>
  )
}

export default Navbar
