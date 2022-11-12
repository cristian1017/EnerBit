import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { getCreateProduct } from "../../store/slices/inventario/inventarioThunk";

export const CreateProduct = () => {

  const dispatch = useDispatch();
  const {isCreate} = useSelector(state => state.inventario);

  const formik = useFormik({
    initialValues: {
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
      seals: "",
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
      i_max: Yup.number().required(),
      i_b: Yup.number().required(),
      i_n: Yup.number().required(),
      seals: Yup.string().required(),
    }),
    onSubmit: (formValue) => {
      dispatch(getCreateProduct(formValue));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-wrap" style={{ gap: "25px" }}>
          <div>
            <label className="form-label">serial</label>
            <input
              className="form-control"
              type="text"
              name="serial"
              onChange={formik.handleChange}
              value={formik.values.serial}
            />
            {formik.errors.serial ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el serial*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">connection_type</label>
            <input
              className="form-control"
              type="text"
              name="connection_type"
              onChange={formik.handleChange}
              value={formik.values.connection_type}
            />
            {formik.errors.connection_type ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el connection_type*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">storage_system</label>
            <input
              className="form-control"
              type="text"
              name="storage_system"
              onChange={formik.handleChange}
              value={formik.values.storage_system}
            />
            {formik.errors.storage_system ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el storage_system*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">condition</label>
            <input
              className="form-control"
              type="text"
              name="condition"
              onChange={formik.handleChange}
              value={formik.values.condition}
            />
            {formik.errors.condition ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el condition*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">owner</label>
            <input
              className="form-control"
              type="text"
              name="owner"
              onChange={formik.handleChange}
              value={formik.values.owner}
            />
            {formik.errors.owner ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el owner*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">location</label>
            <input
              className="form-control"
              type="text"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
            {formik.errors.location ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el location*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">manufacturer</label>
            <input
              className="form-control"
              type="text"
              name="manufacturer"
              onChange={formik.handleChange}
              value={formik.values.manufacturer}
            />
            {formik.errors.manufacturer ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el manufacturer*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">purchase</label>
            <input
              className="form-control"
              type="text"
              name="purchase"
              onChange={formik.handleChange}
              value={formik.values.purchase}
            />
            {formik.errors.purchase ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el purchase*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">i_max</label>
            <input
              className="form-control"
              type="text"
              name="i_max"
              onChange={formik.handleChange}
              value={formik.values.i_max}
            />
            {formik.errors.i_max ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el i_max*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">i_b</label>
            <input
              className="form-control"
              type="text"
              name="i_b"
              onChange={formik.handleChange}
              value={formik.values.i_b}
            />
            {formik.errors.i_b ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el i_b*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">i_n</label>
            <input
              className="form-control"
              type="text"
              name="i_n"
              onChange={formik.handleChange}
              value={formik.values.i_n}
            />
            {formik.errors.i_n ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el i_n*</p>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">seals</label>
            <input
              className="form-control"
              type="text"
              name="seals"
              onChange={formik.handleChange}
              value={formik.values.seals}
            />
            {formik.errors.seals ? (
              <div style={{ color: "red" }}>
                <p>Ingrese el seals*</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{margin:"10px"}}>
          <button className="btn btn-primary" type="submit">Crear</button>
        </div>
      </form>
    </>
  );
}
