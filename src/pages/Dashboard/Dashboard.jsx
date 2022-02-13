import { useNavigate } from 'react-router-dom'
import Todolist from '../Todolist/Todolist'
import Pictures from '../Pictures/Pictures'
// import Products from '../Products/Products'

import s from './Dashboard.module.scss'
const DashBoard = () => {
  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(page)
  }
  return (
    <div className={s.dashboard}>
      <div className={s.item} onClick={() => handleClick('./../todolist')}>
        <Todolist />
      </div>
      <div className={s.item} onClick={() => handleClick('./../pictures')}>
        <Pictures />
      </div>
      {/* <div className={s.item} onClick={() => handleClick('./../products')}>
        <Products />
      </div> */}
    </div>
  )
}

export default DashBoard
