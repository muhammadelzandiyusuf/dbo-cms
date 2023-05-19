import { Modal, Container, Row, Col, Image } from "libraries";
import { convertDate } from "utils";
import NumberFormat from 'react-number-format';

const DetailOrder = (props) => {

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
                    Detail Order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row className={'border-bottom'}>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <label className={'color-grey font-14'}>Order Item Number</label>
                            <p>{props.details?.productHighlight?.orderItemNumber}</p>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <label className={'color-grey font-14'}>Status</label>
                            <p>{props.details?.productHighlight?.status}</p>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <label className={'color-grey font-14'}>Order Created</label>
                            <p>{convertDate(props.details?.created)}</p>
                        </Col>
                    </Row>
                    <Row className={'mt-16p'}>
                        <Col xs={3} sm={3} md={2} lg={2}>
                            <Image src={props.details?.productHighlight?.productImage} alt={'product-image'} className={'w-100'} />
                        </Col>
                        <Col xs={3} sm={3} md={5} lg={5}>
                            <label className={'color-grey font-14'}>
                                {props.details?.productHighlight?.productBrand} {props.details?.productHighlight?.productName}
                            </label>
                            <label className={'color-grey font-14'}>
                                {props.details?.productHighlight?.productCode}
                            </label>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <label className={'color-grey font-14'}>x {props.details?.productHighlight?.quantity}</label>
                        </Col>
                        <Col xs={4} sm={4} md={3} lg={3}>
                            <label className={'color-grey font-14'}>
                                <NumberFormat value={props.details?.productHighlight?.price} displayType={'text'}
                                          thousandSeparator={true} prefix={'Rp. '} decimalScale={0} />
                            </label>
                        </Col>
                    </Row>
                    <Row className={'mt-16p'}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-grey font-14'}>Order Number</label>
                                    <p>{props.details?.orderNumber}</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-grey font-14'}>Status</label>
                                    <p>{props.details?.status}</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-grey font-14'}>Customer</label>
                                    <p>{props.details?.user?.firstName} {props.details?.user?.lastName}</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-grey font-14'}>Payment Method</label>
                                    <p>{props.details?.payment?.paymentMethod?.name} / {props.details?.payment?.paymentMethod?.type}</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-grey font-14'}>Payment Date</label>
                                    <p>{convertDate(props.details?.payment?.paymentDate)}</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <label className={'color-grey font-14'}>Status Payment</label>
                                    <p>{props.details?.payment?.status}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Row className={'border-bottom'}>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <p className={'fw-bold'}>Subtotal</p>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <div className={'text-align-right fw-bold'}>
                                        <NumberFormat value={props.details?.productHighlight?.subtotal} displayType={'text'}
                                                      thousandSeparator={true} prefix={'Rp. '} decimalScale={0} />
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <p className={'color-primary fw-bold'}>Total Discount</p>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <div className={'text-align-right color-primary fw-bold'}>
                                        <NumberFormat value={props.details?.productHighlight?.discount} displayType={'text'}
                                                      thousandSeparator={true} prefix={'Rp. '} decimalScale={0} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className={'mt-16p'}>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <p className={'fw-bold'}>Grand Total</p>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <div className={'text-align-right fw-bold'}>
                                        <NumberFormat value={props.details?.productHighlight?.grandTotal} displayType={'text'}
                                                      thousandSeparator={true} prefix={'Rp. '} decimalScale={0} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default DetailOrder