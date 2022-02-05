import { useState } from 'react'
import Signupform from './Signupform'
import imageBlock from './../../images/Illustration.png'
import s from './Signup.module.scss'

const Signup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }
  const handleCheckbox = () => {
    setCheckbox(!checkbox)
    console.log(checkbox)
  }

  return (
    <div className={s.signup}>
      <Signupform
        name={name}
        password={password}
        userName={userName}
        email={email}
        checkbox={checkbox}
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangeUserName={handleChangeUserName}
        handleChangePassword={handleChangePassword}
        handleCheckbox={handleCheckbox}
      />

      <div className={s.imageBlock}>
        <div className={s.testingBlock}>
          <p>Ваше имя: {name}</p>
          <p>Ваша почта: {email}</p>
          <p>Ваш юзернейм: {userName}</p>
          <p>Ваш пароль: {password}</p>
          <p>CHECKBOX: {checkbox.toString()}</p>
        </div>
        <img src={imageBlock} alt="user" width="694px" height="428px" />
      </div>
    </div>
  )
}

export default Signup
