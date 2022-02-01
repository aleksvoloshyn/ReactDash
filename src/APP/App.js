// import './App.css'
import s from './App.module.scss'
import FilteredArrayForm from './../FilteredArrayForm'
import Navbar from '../components/Navbar'

function App() {
  return (
    <div className={s.App}>
      <Navbar />
      <FilteredArrayForm title="FilteredArrayForm" />
    </div>
  )
}

export default App
