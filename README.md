
### Tecnologias utilizadas en el proyecto.
- React js
- Hooks
- reduxjs/toolkit
	- Para mantener los estados de nuestra aplicación
- Axios
	- Axios para consumir los endpoints de la API otorgada.
- sweetalert2
  - Mostrar mensajes de respuestas
Boostrap
  - Brindarle diseño a nuestro proyecto y estilos.
LocalStorage
  - Validar si el usuario ingreso las credenciales correctamente y para mantener la sesión.
Yup
  - Validar los campos


### Despliegue local
### Paso 1
Descargar o clonar el proyecto `git clone https://github.com/cristian1017/EnerBit.git`
### Paso 2
Ingresar a la carpeta del proyecto, una vez ingresado, ejecutar `npm i` en una terminal
### Paso 3
Ejecutar `npm run dev`, para correr la aplicación.


### Observaciones

Cuando intento realizar las acciones de Crear, Actualizar y Eliminar, me da error por problemas de CORS entre el servidor de la API, con el proyecto de React.
Mensaje desde la consola del navegador: `Access to XMLHttpRequest at 'http://ops.enerbit.dev/learning/api/v1/meters from origin ... has been blocked by CORS policy: Response to preflight request doesn't pass access control check: Redirect is not allowed for a preflight request.`, 
