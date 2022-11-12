import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { setOptionUpdate } from '../../store/slices/inventario/inventarioSlice';
import { getDelete, getEdit } from '../../store/slices/inventario/inventarioThunk';

export const Product = ({data, handleClose, optDelete, editOpt}) => {
  
  const {isUpdatedProduct} = useSelector(state => state.inventario);
  const dispatch = useDispatch();
  

  const {
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
  } = data;
  
  const [edit, setEdit] = useState(isEdit)
  const handleClickUpdate = (e) => {
    setEdit(true)
    e.preventDefault()
    dispatch(setOptionUpdate())
  }

  const handleClosePopup = (e) => {
    e.preventDefault()
    handleClose
  }

  const formik = useFormik({
    initialValues: {
      id: id,
      serial: serial,
      connection_type: connection_type,
      storage_system: storage_system,
      condition: condition,
      owner: owner,
      location: location,
      manufacturer: manufacturer,
      purchase: purchase,
      i_max: i_max,
      i_b: i_b,
      i_n: i_n,
      seals: seals,
    },
    validationSchema: Yup.object({
      serial: Yup.string().required(),
      connection_type: Yup.string().required(),
      storage_system: Yup.string().required(),
      condition: Yup.string().required(),
      owner: Yup.string().required(),
      location: Yup.string().required(),
      manufacturer: Yup.string().required(),
      purchase: Yup.string().required(),
      i_max:Yup.number().required() ,
      i_b: Yup.number().required() ,
      i_n: Yup.number().required() ,
      seals: Yup.string().required(),
    }),
  });

  return (
    <>
      <form action="">
        <div className="d-flex flex-wrap" style={{ gap: "25px" }}>
          <div>
            <label className="form-label">serial</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="serial"
                onChange={formik.handleChange}
                value={formik.values.serial}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="serial"
                value={formik.values.serial}
              />
            )}
            {formik.errors.serial ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el serial*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">connection_type</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="connection_type"
                onChange={formik.handleChange}
                value={formik.values.connection_type}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="connection_type"
                value={formik.values.connection_type}
              />
            )}
            {formik.errors.connection_type ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el connection_type*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">storage_system</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="storage_system"
                onChange={formik.handleChange}
                value={formik.values.storage_system}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="storage_system"
                value={formik.values.storage_system}
              />
            )}
            {formik.errors.storage_system ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el storage_system*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">condition</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="condition"
                onChange={formik.handleChange}
                value={formik.values.condition}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="condition"
                value={formik.values.condition}
              />
            )}
            {formik.errors.condition ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el condition*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">owner</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="owner"
                onChange={formik.handleChange}
                value={formik.values.owner}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="owner"
                value={formik.values.owner}
              />
            )}
            {formik.errors.owner ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el owner*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">location</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="location"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="location"
                value={formik.values.location}
              />
            )}
            {formik.errors.location ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el location*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">manufacturer</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="manufacturer"
                onChange={formik.handleChange}
                value={formik.values.manufacturer}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="manufacturer"
                value={formik.values.manufacturer}
              />
            )}
            {formik.errors.manufacturer ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el manufacturer*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">purchase</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="purchase"
                onChange={formik.handleChange}
                value={formik.values.purchase}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="purchase"
                value={formik.values.purchase}
              />
            )}
            {formik.errors.purchase ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el purchase*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">i_max</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="i_max"
                onChange={formik.handleChange}
                value={formik.values.i_max}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="i_max"
                value={formik.values.i_max}
              />
            )}
            {formik.errors.i_max ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el i_max*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">i_b</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="i_b"
                onChange={formik.handleChange}
                value={formik.values.i_b}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="i_b"
                value={formik.values.i_b}
              />
            )}
            {formik.errors.i_b ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el i_b*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">i_n</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="i_n"
                onChange={formik.handleChange}
                value={formik.values.i_n}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="i_n"
                value={formik.values.i_n}
              />
            )}
            {formik.errors.i_n ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el i_n*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">seals</label>
            {edit ? (
              <input
                className="form-control"
                type="text"
                name="seals"
                onChange={formik.handleChange}
                value={formik.values.seals}
              />
            ) : (
              <input
                className="form-control"
                type="text"
                disabled
                onChange={formik.handleChange}
                name="seals"
                value={formik.values.seals}
              />
            )}
            {formik.errors.seals ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el seals*</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ margin: "20px" }}>
            <button
              className="btn btn-success"
              type="submit"
              onClick={
                edit
                  ? (e) => {
                      setEdit(true);
                      e.preventDefault();
                      dispatch(getEdit(id));
                    }
                  : handleClickUpdate
              }
            >
              {edit ? "Guardar" : "Editar"}
            </button>
          </div>
          <div style={{ margin: "20px" }}>
            <button
              className={!edit ? "btn btn-danger" : "btn btn-secondary"}
              type="submit"
              onClick={
                !edit
                  ? (e) => {
                      e.preventDefault();
                      handleClose;
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
                    }
                  : () => handleClosePopup(e)
              }
            >
              {edit ? "Cancel" : "Eliminar"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
