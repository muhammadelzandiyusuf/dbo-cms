import { Modal, Container, Row, Col, Image } from "libraries";
import { convertDate } from "utils";

const DetailCustomer = (props) => {

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
                    Detail Customer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Image src={props.customerDetail.image} className={'w-100 mb-8p'} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <label className={'color-grey'}>Full Name</label>
                            <p>{props.customerDetail.firstName} {props.customerDetail.lastName}</p>

                            <label className={'color-grey'}>Email</label>
                            <p>{props.customerDetail.email}</p>

                            <label className={'color-grey'}>Phone Number</label>
                            <p>{props.customerDetail.phoneNumber}</p>

                            <label className={'color-grey'}>Birthday</label>
                            <p>{convertDate(props.customerDetail.birthDate)}</p>

                            <label className={'color-grey'}>Date Join</label>
                            <p>{convertDate(props.customerDetail.dateJoined)}</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default DetailCustomer;