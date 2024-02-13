import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registratoin from './pages/Registration/Registratoin';
import { userContext } from './context/userContext';
import Mobile from './pages/Mobile/Mobile';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/CheckOut/CheckOut';

function App() {
  const { isLoggedIn } = useContext(userContext);

  const ProtectedRoute=()=>{
    return isLoggedIn ? <Outlet/>: <Navigate to="/login"/> 
  }

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home /> : <Login/>} />
      <Route path="/register" element={<Registratoin />} />
      <Route path="/login" element={isLoggedIn ?<Home /> : <Login/>} />
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/" replace />}
      />
      <Route element={<ProtectedRoute/>}>
          <Route path='/mobile/:id' element={<Mobile/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/checkout/:id' element={<CheckOut/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
