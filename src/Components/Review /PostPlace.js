import React from "react";
import { Card, Button, Image, Row, Col, ListGroup } from "react-bootstrap";
import Comments from "./Comments";

class PostPlace extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "60rem", margin: "50px auto" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card style={{ width: "13rem", height: '32rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150x200"
                  />
                  <Card.Body>
                    <Card.Title>Book name</Card.Title>
                    <Card.Text>drama, si-fi, action</Card.Text>
                    <ListGroup.Item>❤️ 20</ListGroup.Item>
                    <ListGroup.Item>⭐ 2.5</ListGroup.Item>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{width: '40rem', height: '32rem'}}>
                  <Card.Header as="h5">
                  <Image
                    style={{ float: "left" }}
                    src="https://via.placeholder.com/70"
                    roundedCircle
                  />
                  <p>user.random@gmail.com</p>
                  <p>user name</p>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Post/review title</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content. With supporting text below as a natural lead-in to
                      additional content. With supporting text below as a natural lead-in to
                      additional content.
                      With supporting text below as a natural lead-in to
                      additional content.With supporting text below as a natural lead-in to
                      additional content.

                      With supporting text below as a natural lead-in to
                      additional content.With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Comments/>
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

export default PostPlace;
