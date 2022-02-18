import { Routes, Route } from 'react-router-dom'
// import Consulta from './components/consulta/Consulta.jsx';
import Header from './components/Header/Header.jsx'
import Styles from './App.module.css'
import { Login, Search } from './pages'

function App () {
  return (
    <div className={Styles.App}>
      <Header />
      <div className={Styles.content}>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
