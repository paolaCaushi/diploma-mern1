import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Hyr</Col>
      <Col className={props.step2 ? 'active' : ''}>Transporti</Col>
      <Col className={props.step3 ? 'active' : ''}>Pagesa</Col>
      <Col className={props.step4 ? 'active' : ''}>Mbaro Blerjen</Col>
    </Row>
  );
}
