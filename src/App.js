import './App.css';
import ToDoapps from './Pages/ToDoapps.js/ToDoapps';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="App">
          <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todoapps" element={ <RequireAuth>
        <ToDoapps/>
      </RequireAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  );
}

export default App;
