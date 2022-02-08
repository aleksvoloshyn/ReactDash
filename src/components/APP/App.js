// import './App.css'

// import FilteredArrayForm from './../FilteredArrayForm'
import { Routes, Route } from 'react-router-dom'
import Container from '../Container'
import Navbar from '../Navbar'
import Board from '../Board'
import Signup from '../SignUp/Signup'

import s from './App.module.scss'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" exact element={<Signup />}></Route>
        <Route
          path="*"
          element={
            <div className={s.App}>
              <Navbar />
              <Board />
              {/* <FilteredArrayForm title="FilteredArrayForm" /> */}
            </div>
          }
        ></Route>
      </Routes>
    </Container>
  )
}

export default App
