import { Modal, Container, Row, Col, useForm, Form, Button } from "libraries";

const FormAdd = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            fullscreen={'sm-down'}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Supplier
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" {...register("name", { required: true })} />
                                    {errors.name &&
                                        <Form.Text className="text-danger">
                                            Name is required
                                        </Form.Text>
                                    }
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Form.Group className="mb-3" controlId="Code">
                                    <Form.Label>Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Code" {...register("code", { required: true })} />
                                    {errors.code &&
                                        <Form.Text className="text-danger">
                                            Code is required
                                        </Form.Text>
                                    }
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className={'text-align-right'}>
                                    <Button variant="danger" type={'submit'}>
                                        Add Data
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default FormAdd