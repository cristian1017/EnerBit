import { useState } from "react";
import { Popup } from "./popups/Popup";

export const ButtonCreate = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const data = []

  const handleCreate = () => {
    setShow(true);
  };
  return (
    <>
      <div className="d-flex flex-row mb-3" style={{margin:"10px", padding:"10px"}}>
        <button className="btn btn-primary" onClick={handleCreate}>Crear producto</button>
      </div>
      <Popup data={data} show={show} title="Crear Producto" handleClose={handleClose} create={true}/> 
    </>

  )
}
