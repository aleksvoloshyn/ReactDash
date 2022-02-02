import Switch from 'react-switch'
import { useState } from 'react'
import lampOn from '../../../images/lampOn.png'
import lampOff from '../../../images/lampOff.png'
import s from './Upgrate.module.scss'

const Upgrate = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div className={s.upgrateWrapper}>
      <label className={s.switcher}>
        {/* <span>Switch the light</span> */}
        <Switch onChange={handleChange} checked={checked} />
      </label>

      <div className={s.upgrate}></div>

      {checked ? (
        <div className={s.lampChecked}>
          <img src={lampOn} alt="" />
        </div>
      ) : (
        <div className={s.lamp}>
          <img src={lampOff} alt="" />
        </div>
      )}

      <button type="button" className={s.button}>
        Upgrate Now
      </button>
    </div>
  )
}

export default Upgrate
