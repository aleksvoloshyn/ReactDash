import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './Forms.module.scss'
import { useState } from 'react'

const Forms = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [text, setText] = useState('')
  const [color, setColor] = useState('')
  const [choice, setChoice] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={s.forms}>
      <h2>forms</h2>
      <div className={s.forms__infoBoard}>
        <p>Вы ввели имя: {name}</p>
        <p>Вы ввели почту: {email}</p>
        <p>Вы ввели пароль: {password}</p>
        <p>Вы ввели текст: {text}</p>
        <p>Вы выбрали цвет: {color}</p>
        <p>Вы выбрасли из списка : {choice}</p>
      </div>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Forms
