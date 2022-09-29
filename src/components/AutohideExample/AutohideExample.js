import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import './AutohideExample.css';

function AutohideExample() {
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        {/* <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>Congratulation!! You successfully Completed</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button className='button-cmp' onClick={() => setShow(true)}>
                    <p >Activity Completed</p>
                </Button>
            </Col>
        </Row>
    );
}

export default AutohideExample;