import React from 'react';
import { Card, Button, Image, Row, Col, ListGroup, Form } from "react-bootstrap";
class Comments extends React.Component {
  
  render() {
    return (<>
    <Card style={{width: '38rem'}}>
      <Card.Body>
      <ListGroup.Item>
      <Row style={{textAlign: 'center'}}>
        <Col>
        <Button style={{width: '15rem'}}>❤️</Button>
        </Col>
        <Col>
        <Button style={{width: '15rem'}}>💬</Button>
        </Col>
      </Row>
      </ListGroup.Item>
      <Form.Control type='text' placeholder='Comment'/>
      <ListGroup.Item>comment 1</ListGroup.Item>
      </Card.Body>
    </Card>
    </>);
  }
  
}

export default Comments;
