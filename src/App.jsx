import { Routes, Route } from "react-router-dom";
// import Consulta from './components/consulta/Consulta.jsx';
import Header from './components/header/Header.jsx';
import Styles from './App.module.css';
import Login from './pages/login/Login.jsx';

function App() {

  return (
    <div className={Styles.App}>
      <Header/>
      <div className={Styles.content}>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
