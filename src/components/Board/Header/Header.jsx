// import Datepicker from './Datepicker/Datepicker'
import s from './Header.module.scss'

const Header = ({ title }) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__titleBlock}>
          <h2 className={s.header__title}>{title}</h2>
        </div>
        {/* <Datepicker /> */}
      </header>
    </>
  )
}

export default Header
