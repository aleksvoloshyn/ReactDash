import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Analytics from '../../pages/Analytics'

import s from './Board.module.scss'

const Board = () => {
  return (
    <main className={s.board}>
      <Header title="BOARD" />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </main>
  )
}

export default Board
