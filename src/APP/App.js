// import './App.css'

// import FilteredArrayForm from './../FilteredArrayForm'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Board from '../components/Board'
import s from './App.module.scss'

function App() {
  return (
    <Container>
      <div className={s.App}>
        <Navbar />
        <Board /> {/* <FilteredArrayForm title="FilteredArrayForm" /> */}
      </div>
    </Container>
  )
}

export default App
