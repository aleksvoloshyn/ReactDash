import Signupform from './Signupform'
import imageBlock from './../../images/Illustration.png'
import s from './Signup.module.scss'

const Signup = () => {
  return (
    <div className={s.signup}>
      <Signupform />
      <div className={s.imageBlock}>
        <img src={imageBlock} alt="user" width="694px" height="428px" />
      </div>
    </div>
  )
}

export default Signup
