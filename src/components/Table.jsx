import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDelete, getInventario } from '../store/slices/inventario/inventarioThunk';
import { Pagination } from './Pagination';
import { Popup } from './popups/Popup';
import Swal from 'sweetalert2';

export const Table = ({serial}) => {
  const {productos} = useSelector(state => state.inventario);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8)

  const [editOpt, setEdit] = useState(false)
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    id: "",
    serial: "",
    connection_type: "",
    storage_system: "",
    condition: "",
    owner: "",
    location: "",
    manufacturer: "",
    purchase: "",
    i_max: "",
    i_b: "",
    i_n: "",
    seals: ""
  });

  const handleClickEditar =(
    id,
    serial,
    connection_type,
    storage_system,
    condition,
    owner,
    location,
    manufacturer,
    purchase,
    i_max,
    i_b,
    i_n,
    seals,
    isEdit
  ) => {
    setData({
      id,
      serial,
      connection_type,
      storage_system,
      condition,
      owner,
      location,
      manufacturer,
      purchase,
      i_max,
      i_b,
      i_n,
      seals,
      isEdit: true
    });
    setShow(true)
  }

  const search = (data) => {
    return data.filter(
      (i) => i.serial.toLowerCase().includes(serial)
    )
  }

  
  useEffect(() => {
    dispatch(getInventario())
  }, [dispatch])
  
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentProd = productos.slice(indexOfFirst, indexOfLast)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const dataFilter = search(currentProd)

  const handleClose = () => setShow(false);
  const handleClickRow = (
    id,
    serial,
    connection_type,
    storage_system,
    condition,
    owner,
    location,
    manufacturer,
    purchase,
    i_max,
    i_b,
    i_n,
    seals,
    isEdit
  ) => {
    setData({
      id,
      serial,
      connection_type,
      storage_system,
      condition,
      owner,
      location,
      manufacturer,
      purchase,
      i_max,
      i_b,
      i_n,
      seals,
      isEdit
    });
    setShow(true)
    
  };

  const handleDelete = (id) => {
    dispatch(getDelete(id));
    console.log(id)
  }


  
  return (
    <>
      <table className="table table-hover" >
        <thead>
          <tr>
            <th scope="col">serial</th>
            <th scope="col">connection_type</th>
            <th scope="col">storage_system</th>
            <th scope="col">condition</th>
            <th scope="col">owner</th>
            <th scope="col">location</th>
            <th scope="col">manufacturer</th>
            <th scope="col">purchase</th>
            <th scope="col">i_max</th>
            <th scope="col">i_b</th>
            <th scope="col">i_n</th>
            <th scope="col">seals</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataFilter.map(({
            id,
            serial,
            connection_type,
            storage_system,
            condition,
            owner,
            location,
            manufacturer,
            purchase,
            i_max,
            i_b,
            i_n,
            seals,
          }) => {
            return (
              <tr key={id}>
                <td>{serial}</td>
                <td>{connection_type}</td>
                <td>{storage_system}</td>
                <td>{condition}</td>
                <td>{owner}</td>
                <td>{location}</td>
                <td>{manufacturer}</td>
                <td>{purchase}</td>
                <td>{i_max}</td>
                <td>{i_b}</td>
                <td>{i_n}</td>
                <td>{seals}</td>
                <td>
                  <button
                    className="btn btn-info"
                    style={{ margin: "5px" }}
                    onClick={() =>
                      handleClickRow(
                        id,
                        serial,
                        connection_type,
                        storage_system,
                        condition,
                        owner,
                        location,
                        manufacturer,
                        purchase,
                        i_max,
                        i_b,
                        i_n,
                        seals,
                        false
                      )
                    }
                  >
                    Ver
                  </button>
                  <button
                    className="btn btn-success"
                    style={{ margin: "5px" }}
                    onClick={() =>
                      handleClickEditar(
                        id,
                        serial,
                        connection_type,
                        storage_system,
                        condition,
                        owner,
                        location,
                        manufacturer,
                        purchase,
                        i_max,
                        i_b,
                        i_n,
                        seals,
                        false
                      )
                    }
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    type="submit"
                    style={{ margin: "5px" }}
                    onClick={() => {
                      Swal.fire({
                        title: "Estas seguro?",
                        text: "¡No podrás revertir esto!!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Si, eliminar!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          dispatch(getDelete(id));
                          Swal.fire(
                            "Eliminado!",
                            "Your file has been deleted.",
                            "success"
                          );
                        }
                      });
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination perPage={perPage} totalProdu ={productos.length} paginate={paginate}/>
      <Popup data={data} show={show} title="Producto" handleClose={handleClose} create={false} optDelete={true} /> 
    </>
  );
}
