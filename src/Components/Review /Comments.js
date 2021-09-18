import React from 'react';
import { Card, Button, Modal, Row, Col, ListGroup, Form } from "react-bootstrap";
import Comment from './Comment';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      show: false,
      
    }
  }
  
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
      <ListGroup.Item onClick={ ()=>{this.setState({show:true})} }> 3 comments</ListGroup.Item>
      <Modal show={this.state.show} onHide={()=>{this.setState({show:false})}}>
      <Comment/>
      <Comment/>

      </Modal>
      </Card.Body>
    </Card>
    </>);
  }
  
}

export default Comments;
