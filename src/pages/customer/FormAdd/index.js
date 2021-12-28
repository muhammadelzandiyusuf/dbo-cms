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
                    Add Customer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" {...register("firstName", { required: true })} />
                                    {errors.firstName &&
                                        <Form.Text className="text-danger">
                                            First Name is required
                                        </Form.Text>
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                                    {errors.email &&
                                        <Form.Text className="text-danger">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    }
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" {...register("lastName", { required: true })} />
                                    {errors.lastName &&
                                        <Form.Text className="text-danger">
                                            Last Name is required
                                        </Form.Text>
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone Number" {...register("phoneNumber", { required: true })} />
                                    {errors.phoneNumber &&
                                        <Form.Text className="text-danger">
                                            Phone Number is required
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