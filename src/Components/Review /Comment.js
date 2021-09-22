import React from "react";
import {
  Card,
  Button,
  Modal,
  Row,
  Col,
  ListGroup,
  Form,
} from "react-bootstrap";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      comment: this.props.comment
    };
  }

  render() {
    return (
      <>
        <ListGroup>
          <Row>
            <Col md={8}>
              {this.state.edit ? (
                <Form.Control onChange={e=>{this.setState({comment: e.target.value})}}
                  className="commentPlace"
                  defaultValue={this.state.comment}
                />
              ) : (
                <ListGroup.Item className="commentPlace">
                  {this.state.comment}
                </ListGroup.Item>
              )}
            </Col>
            <Col md={4}>
              {this.state.edit ? (
                <Button className='editButtons'
                  onClick={() => {
                    this.setState({ edit: false });
                  }}
                >
                  submit
                </Button>
              ) : <button className='editButtons'
              onClick={() => {
                this.setState({ edit: true });
              }}
            >
              Edit
            </button>}
              
            </Col>
          </Row>
        </ListGroup>
      </>
    );
  }
}

export default Comment;
