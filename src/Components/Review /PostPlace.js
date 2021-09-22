import React from "react";
import { Card, Button, Image, Row, Col, ListGroup } from "react-bootstrap";
import Comments from "./Comments";
import { withAuth0 } from "@auth0/auth0-react";
import { ImCross } from "react-icons/im";

class PostPlace extends React.Component {
  render() {
    const { isAuthenticated, logout } = this.props.auth0;
    const { user } = this.props.auth0;
    // console.log(this.props.book);

    return (
      <>
        <Card className="frame" style={{ width: "60rem", margin: "50px auto" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card
                  className="bookCard"
                  style={{ width: "13rem", height: "32rem" }}
                >
                  <Card className="innerBookCard" >
                    <Card.Img
                      className="bookImg"
                      variant="top"
                      src={this.props.book.book.img}
                    />
                    <Card.Body>
                      <Card.Title className='title'>{this.props.book.book.title}</Card.Title>

                      <ListGroup.Item>
                        Author: {this.props.book.book.author}
                      </ListGroup.Item>
                      
                        <button class='infoButton' >
                         <a href={this.props.book.book.infoLink}>
                          Info
                         </a>
                        </button>
                     
                    </Card.Body>
                  </Card>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "40rem", height: "32rem" }}>
                  <Card.Header className="cardHeader" as="h5">
                    <Row>
                      <Col>
                        <Image
                          className="cardImg"
                          src={this.props.book.userImg}
                          roundedCircle
                        />
                      </Col>
                      <Col sm={9}>
                        <p>{this.props.book.userName}</p>
                        <p class="email">{this.props.book.book.email}</p>
                      </Col>
                      <Col>
                        {user.email === this.props.book.book.email && (
                          <span
                            class="x"
                            onClick={() => {
                              this.props.delete(this.props.book._id);
                              window.location.reload();
                            }}
                          >
                            <ImCross />
                          </span>
                        )}
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>{this.props.book.review}</Card.Text>
                    <Comments
                      id={this.props.book._id}
                      updateComment={this.props.updateComment}
                      updateLikes={this.props.updateLikes}
                      likes={this.props.book.likes}
                      comments={this.props.book.comments}
                    />
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
