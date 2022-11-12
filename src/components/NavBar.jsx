import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../store/slices/login/loginSlice";
import { Navigate } from 'react-router-dom';

export const NavBar = () => {
  const {isLogout} = useSelector(state => state.login);

  const dispatch = useDispatch();


  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    dispatch(Logout());
  }

  if(isLogout){
    return <Navigate to="/login" />
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">EnerBit</a>
          <div className="d-flex">
            <button className="btn btn-dark" type="submit" onClick={handleLogout}>Salir</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

