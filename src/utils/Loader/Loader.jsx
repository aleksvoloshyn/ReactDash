import { Circles } from 'react-loader-spinner'
import s from './Loader.module.scss'

const Load = () => {
  return (
    <div className={s.loader}>
      <Circles color="#00BFFF" timeout={500} />
    </div>
  )
}

export default Load
