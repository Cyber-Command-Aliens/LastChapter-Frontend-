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
    };
  }

  render() {
    return (
      <>
        <ListGroup>
          <Row>
            <Col md={8}>
              {this.state.edit ? (
                <Form.Control defaultValue="comment 1" />
              ) : (
                <ListGroup.Item>{this.props.comment}</ListGroup.Item>
              )}
            </Col>
            <Col md={4}>
              {this.state.edit && (
                <Button
                  onClick={() => {
                    this.setState({ edit: false });
                  }}
                >
                  submit
                </Button>
              )}
              <Button
                onClick={() => {
                  this.setState({ edit: true });
                }}
              >
                Edit
              </Button>
            </Col>
          </Row>
        </ListGroup>
      </>
    );
  }
}

export default Comment;
