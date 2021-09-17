import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            profileDB: []
        }
    }

  render() {
    return (
      <>
        <Modal show={this.props.open} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Post a review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Text>Select a book from your list</Form.Text>
            <Form.Select aria-label="Default select example">
              {<option value="1">One</option>}
            </Form.Select>
            <br />
            <Form.Control type="text" placeholder="Title" />
            <br />
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Feel free to describe your reading ..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.close}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PostForm;
