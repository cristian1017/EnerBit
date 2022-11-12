import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../store/slices/login/loginSlice";
import { Navigate } from 'react-router-dom';
import { NavBar } from "../components/NavBar";
import { Table } from "../components/Table";
import { Pagination } from "../components/Pagination";
import { ButtonCreate } from "../components/ButtonCreate";
import { useState } from "react";

export const Home = () => {
  const [serial, setSerial] = useState("")
  return (
    <>
      <div>
        <NavBar />
        <div className="d-flex justify-content-between align-items-center" style={{margin:"20px"}}>
          <ButtonCreate />
          <div>
            <input className="form-control" type="text" onChange={(e) => setSerial(e.target.value)} placeholder="Buscar por serial"/>
          </div>
        </div>
        <div style={{marginRight:"20px",marginLeft:"20px", padding:"10px"}}>
          <Table serial={serial}/>
        </div>
      </div>

    </>
  );
}
