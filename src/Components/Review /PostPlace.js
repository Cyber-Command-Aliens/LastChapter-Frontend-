import React from "react";
import { Card, Button, Image, Row, Col, ListGroup } from "react-bootstrap";
import Comments from "./Comments";
import { withAuth0 } from '@auth0/auth0-react';

class PostPlace extends React.Component {
  render() {
    const { isAuthenticated,logout } = this.props.auth0;
    const { user } = this.props.auth0;
    console.log(this.props.book);
    return (
      <>
        <Card style={{ width: "60rem", margin: "50px auto" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card style={{ width: "13rem", height: "32rem" }}>
                  <Card.Img variant="top" src={this.props.book.book.img} />
                  <Card.Body>
                    <Card.Title>{this.props.book.book.title}</Card.Title>

                    <ListGroup.Item>
                      Author: {this.props.book.book.author}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button href={this.props.book.book.infoLink}>Info</Button>
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "40rem", height: "32rem" }}>
                  <Card.Header as="h5">
                    <Row>
                      <Col>
                        <Image src={this.props.book.userImg} roundedCircle />
                      </Col>
                      <Col>
                        <p>{this.props.book.book.email}</p>
                        <p>{this.props.book.userName}</p>
                      </Col>
                      <Col>
                       {user.email===this.props.book.book.email&&
                        <Button onClick={()=>{this.props.delete(this.props.book._id)}}>Delete post</Button>
                       }
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>{this.props.book.review}</Card.Text>
                    <Comments id={this.props.book._id} updateComments={this.props.updateComments} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withAuth0(PostPlace);
