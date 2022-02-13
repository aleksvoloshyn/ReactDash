import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBar = ({ onSubmitHandler, value, onChangeValue }) => {
  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="add todo here"
            aria-label="add todo"
            value={value}
            onChange={onChangeValue}
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            Add toDo
          </Button>
        </InputGroup>
      </Form>
    </>
  )
}

export default SearchBar
