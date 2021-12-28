import { Modal, Button } from "libraries";

const FormDelete = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="md"
            fullscreen={'sm-down'}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="show-grid">
                <p>{props.message} <b>{props.name}</b> ?</p>
                <div className={'text-align-right'}>
                    <Button variant="outline-danger" className={'mr-8p'} onClick={props.onHide}>
                        Tidak
                    </Button>
                    <Button variant="danger" onClick={() => props.handleDelete(1)}>Ya</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default FormDelete