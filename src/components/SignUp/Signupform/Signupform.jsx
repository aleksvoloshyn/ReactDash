import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import { CgFacebook } from 'react-icons/cg'
import sprite from '../../../images/svg/sprite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './Signupform.module.scss'

const Signupform = ({
  logotitle = 'Sign up',
  handleChangeName,
  handleChangeEmail,
  handleChangeUserName,
  handleChangePassword,
  handleSubmit,
  handleCheckbox,
  name,
  password,
  userName,
  email,
  checkbox,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('./dashboard')
  }

  return (
    <div className={s.signupform}>
      <div className={s.signupform__header}>
        <svg className={s.menuList__item__logo}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
        <h2 className={s.signupform__header__title}>{logotitle}</h2>
        <div className={s.signupform__buttons}>
          <Button variant="light" className={s.socialButton}>
            <FcGoogle /> Google
          </Button>
          <Button variant="light" className={s.socialButton}>
            <CgFacebook /> Facebook
          </Button>
        </div>
      </div>

      <div className={s.devider}>
        <p className={s.devider__text}> Or </p>
      </div>

      <div className={s.signupform__form}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChangeEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={userName}
              onChange={handleChangeUserName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              checked={checkbox}
              onChange={handleCheckbox}
              label="By creating an account you agree to the terms of use and our privacy policy."
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className={s.createAccountButton}
              onClick={handleSubmit}
            >
              Create account
            </Button>
          </div>
        </Form>
        <div className={s.signupform__footer}>
          <p className={s.loginText}>Already have an account? </p>
          <div onClick={handleClick} className={s.loginText__redirect}>
            Log in
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signupform
