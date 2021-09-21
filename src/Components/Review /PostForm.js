import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDB: this.props.fB,
      book: this.props.fB[0],
      title: "no-title",
      review: "...",
    };
  }

  selector = (e) => {

    this.setState({
      book: this.state.profileDB[e.target.value],
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Modal show={this.props.open} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Post a review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Text>Select a book from your list</Form.Text>
            <Form.Select onChange={this.selector} aria-label="Default select example">
              {this.state.profileDB.map((p,i)=>{
                return <option value={i}>{p.title}</option>
              })}
            </Form.Select>
            <br />
            <Form.Control onChange={ (e)=>{this.setState({title: e.target.value})}} type="text" placeholder="Title" />
            <br />
            <Form.Control onChange={ (e)=>{this.setState({review: e.target.value})}}
              as="textarea"
              rows={4}
              placeholder="Feel free to describe your reading ..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.props.poster(this.state); window.location.reload()}} >
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(PostForm);
