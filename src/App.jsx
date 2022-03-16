import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Styles from './App.module.css'
import { Login, Search } from './pages'
import { UserStorage } from './contexts/UserContext.js'
import User from './pages/User/User.jsx'
// import Main from './components/color/Main.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'

function App () {
  return (
    <div className={Styles.App}>
      <UserStorage>
        <Header />
        <div className={Styles.content}>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/usuarios/*' element={<User />} />
            <Route path='/acervo/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
          </Routes>
        </div>
      </UserStorage>
    </div>
  )
}

export default App
