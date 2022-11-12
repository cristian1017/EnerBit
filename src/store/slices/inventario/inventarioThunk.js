import { baseApí } from "../../../api/baseAPI";
import { startLoadingData, setInventario, createProduct } from "./inventarioSlice";
import Swal  from "sweetalert2";


export const getInventario = () => {
  return async(dispatch, getInventario) => {
    try {
      dispatch(startLoadingData());
      const { data } = await baseApí.get("");
      const lista = data["items"].reverse()
      dispatch(setInventario({ productos: lista, pages: data["pages"], limit: data["size"] }));
      dispatch(finishLoadingData());
    } catch (error) {
      if(error.code === 'ERR_NETWORK'){
        Swal.fire("Error", "Error de conexión de Internet", "error");
      }
    }
  }
}

export const getCreateProduct = (values) => {
  return async(dispatch, getState) => {
    try {
      const { status, data } = await baseApí.post("", values, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
        },
      });
      if(status === 201){
        dispatch(createProduct({isCreate: true}))
        Swal.fire("Success", "Se creo correctamente el producto", "success");
      }
    } catch (error) {
      if(error.status !== 201){
        Swal.fire("Error", "Error al crear", "error");
      }
    }
  }
}

export const getEdit = (id,values) => {
  return async(dispatch, getState) => {
    try {
      const { status, data } = await baseApí.patch(`/${id}`, values, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
        },
      });
      if(status === 200){
        Swal.fire("Success", "Se actualizo correctamente el producto", "success");
      }
    } catch (error) {
      if(error.status !== 200){
        Swal.fire("Error", "Error al actualizar", "error");
      }
    }
  }
}


export const getDelete = (id) => {
  return async(dispatch, getState) => {
    try {
      const { status, data} = await baseApí.delete(`/${id}`);
      if(status === 202){
        Swal.fire("Eliminado!", "Se elimino correctamente el producto", "success");
      }
    } catch (error) {
      if(error.status !== 202){
        Swal.fire("Error", "Error al eliminar el producto", "error");
      }
    }
  }
}
