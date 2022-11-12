import Modal from 'react-bootstrap/Modal';
import { CreateProduct } from '../inventario/CreateProduct';
import { Product } from '../inventario/Product';

export const Popup = ({data, show, handleClose, title, create, optDelete, editOpt}) => {

  const {id} = data;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{borderRadius:"15px"}}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {create ? <CreateProduct/> : <Product data={data} handleClose={handleClose} optDelete={optDelete} editOpt={editOpt}/>}
        </Modal.Body>
      </Modal>
    </>
  )
}
