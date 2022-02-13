import { useState } from 'react'
import Header from './../../components/Board/Header/Header'
import SearchBar from './../../components/Board/Todo/SearchBar/SearchBar'
import Filter from '../../components/Board/Todo/Filter'
import TodoItems from '../../components/Board/Todo/TodoItems/TodoItems'

const items = [
  { text: 'learn REDUX', isDone: false },
  { text: 'learn REDUX-toolkit', isDone: false },
  { text: 'learn async REDUX', isDone: false },
  { text: 'learn PROMISES', isDone: false },
  { text: 'learn ASYNC/AWAIT', isDone: false },
]

const Todolist = () => {
  const [todo, setTodo] = useState(items)
  const [value, setValue] = useState('')
  const [checkedItems, setCheckedItems] = useState([])
  const [filter, setFilter] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (value) {
      setTodo([...todo, { isDone: false, text: value }])
      setValue('')
    }
  }

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onChangeFilterValue = (e) => {
    setFilter(e.target.value)
  }

  const onDelete = (ind) => {
    const delFilter = todo.filter((item, index) => {
      return ind !== index
    })
    setTodo(delFilter)
  }

  const handleChange = (ind) => {
    const checked = todo.filter((item, index) => {
      return ind === index
    })
    setCheckedItems([...checkedItems, ...checked])
    onDelete(ind)
  }

  const handleChangeChecked = (ind) => {
    const delFilter = checkedItems.filter((item, index) => {
      return ind !== index
    })
    const checked = checkedItems.filter((item, index) => {
      return ind === index
    })
    setCheckedItems(delFilter)
    setTodo([...todo, ...checked])
  }

  const filteredResult = () => {
    if (filter === '') {
      return todo
    } else {
      return todo.filter((i) =>
        i.text.toLowerCase().includes(filter.toLowerCase())
      )
    }
  }

  return (
    <div>
      <Header title="TODO LIST" />
      <SearchBar
        value={value}
        onSubmitHandler={onSubmitHandler}
        onChangeValue={onChangeValue}
      />

      <Filter filter={filter} onChangeFilterValue={onChangeFilterValue} />

      <TodoItems
        filteredResult={filteredResult}
        handleChange={handleChange}
        onDelete={onDelete}
        checkedItems={checkedItems}
        handleChangeChecked={handleChangeChecked}
      />
    </div>
  )
}

export default Todolist
