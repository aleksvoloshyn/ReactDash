import { v4 as uuidv4 } from 'uuid'
import { Button, InputGroup, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './TodoItems.module.scss'

const TodoItems = ({
  filteredResult,
  handleChange,
  onDelete,
  checkedItems,
  handleChangeChecked,
}) => {
  return (
    <>
      <ul>
        {filteredResult().map((item, ind) => {
          return (
            <li className={s.todoItem} key={uuidv4()}>
              {item.isDone === false && (
                <>
                  <ListGroup.Item className={s.listGroupItem}>
                    {item.text}
                  </ListGroup.Item>
                  <InputGroup.Checkbox
                    aria-label="done"
                    onChange={() => {
                      handleChange(ind)
                    }}
                  />
                  <Button
                    variant="danger"
                    onClick={() => {
                      onDelete(ind)
                    }}
                  >
                    DELETE
                  </Button>
                </>
              )}
            </li>
          )
        })}
      </ul>
      {checkedItems.length > 0 && (
        <ul>
          {checkedItems.map((item, ind) => {
            return (
              <li className={s.todoItem} key={uuidv4()}>
                {item.isDone === false && (
                  <>
                    <ListGroup.Item className={s.listGroupItemDone}>
                      {item.text}
                    </ListGroup.Item>
                    <InputGroup.Checkbox
                      aria-label="done"
                      checked={true}
                      onChange={() => {
                        handleChangeChecked(ind)
                      }}
                    />
                  </>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default TodoItems
