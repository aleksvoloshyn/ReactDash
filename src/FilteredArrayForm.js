import { useState } from 'react'
const users = [
  { id: 1, name: 'Bill', age: 55 },
  { id: 2, name: 'Dob', age: 22 },
  { id: 3, name: 'Ivan', age: 31 },
  { id: 4, name: 'Anton', age: 12 },
  { id: 5, name: 'Garry', age: 38 },
]

const FilteredArrayForm = ({ title }) => {
  const [filter, setFilter] = useState('')
  const [filteredByButton, setFilteredByButton] = useState(users)

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const filteredResult = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  )

  // for button
  const filterUsers = () => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredByButton(filtered)
  }

  return (
    <div>
      <h2>{title}</h2>

      <form action="">
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={filterUsers}>
          SORT
        </button>
      </form>
      <h3>Сортровка на лету</h3>
      <ul>
        {filteredResult.map((user) => {
          return (
            <li key={user.id}>
              <b> name:</b> {user.name} <b>Age</b>: {user.age}
            </li>
          )
        })}
      </ul>
      <hr />
      <ul>
        <h3>Сортровка по нажатию кнопки</h3>
        {filteredByButton.map((user) => {
          return (
            <li key={user.id}>
              <b> ИМЯ : </b> {user.name} <b>Age</b>: {user.age}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FilteredArrayForm
