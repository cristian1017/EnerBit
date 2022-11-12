import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './pages/Home';
import { ProtectedRoutes, ProtectedRoutesLogin } from "./Services/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutesLogin />} >
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
