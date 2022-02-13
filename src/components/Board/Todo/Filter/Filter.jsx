import { Form, InputGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './Filter.module.scss'
const Filter = ({ filter, onChangeFilterValue }) => {
  return (
    <Form>
      <InputGroup className={s.filterInput}>
        <FormControl
          placeholder="type here to filter list"
          aria-label="filter"
          value={filter}
          onChange={onChangeFilterValue}
        />
      </InputGroup>
    </Form>
  )
}

export default Filter
