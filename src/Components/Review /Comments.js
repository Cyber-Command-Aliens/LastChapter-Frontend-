import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";

import {
  Card,
  Button,
  Modal,
  Row,
  Col,
  ListGroup,
  Form,
} from "react-bootstrap";
import Comment from "./Comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: this.props.id,
      comment: "",
      likeButtonSwitch: false,
      commentPlaceSwitch: false
    };
  }

  likesIncrease = () => {
    let likes = this.props.likes + 1;
    this.props.updateLikes(likes, this.state.id);
    this.setState({
      likeButtonSwitch: true,
    });
  };
  likesDecrease = () => {
    let likes = this.props.likes - 1;
    this.props.updateLikes(likes, this.state.id);
    this.setState({
      likeButtonSwitch: false,
    });
  };

  pushComment = (c) => {
    this.props.comments.push(c);
    this.props.updateComment(this.props.comments, this.state.id);
  };

  render() {
    return (
      <>
        <Card style={{ width: "38rem" }}>
          <Card.Body>
            <ListGroup.Item>
              <Row style={{ textAlign: "center" }}>
                <Col>
                  {this.state.likeButtonSwitch ? (
                    <button
                      className="likeAndComment"
                      onClick={() => {
                        this.likesDecrease();
                      }}
                      style={{ width: "15rem" }}
                    >
                      {" "}
                      <FaHeart /> {this.props.likes}{" "}
                    </button>
                  ) : (
                    <button
                      className="likeAndComment"
                      onClick={() => {
                        this.likesIncrease();
                      }}
                      style={{ width: "15rem" }}
                    >
                      {" "}
                      <FaRegHeart /> {this.props.likes}
                    </button>
                  )}
                </Col>
                <Col>
                  <button
                    className="likeAndComment"
                    onClick={() => {
                      this.setState({ show: true });
                    }}
                    style={{ width: "15rem" }}
                  >
                    <GoComment /> {this.props.comments.length}
                  </button>
                </Col>
              </Row>
            </ListGroup.Item>
            <br />
            {this.state.commentPlaceSwitch ? <p><a style={{cursor: 'pointer', color : 'indigo', fontWeight: 'bold', textDecoration: 'underline'}} onClick={()=>{this.setState({commentPlaceSwitch:false})}}>click</a> to add another comment</p>: <Form.Control
              onChange={(e) => {
                this.setState({ comment: e.target.value });
              }}
              type="text"
              placeholder="Comment"
            />}
            <button
              class="comment"
              onClick={() => {
                this.pushComment(this.state.comment); this.setState({commentPlaceSwitch:true})
              }}
            >
             Add comments <i class="bi bi-plus-circle"></i>
            
            </button>
            <Modal
              show={this.state.show}
              onHide={() => {
                this.setState({ show: false });
              }}
            >
              <Card>
                <Card.Header >
                  <Card.Title>Comments</Card.Title>
                </Card.Header>
                <Card.Body>
                {this.props.comments.map((c) => {
                return <Comment comment={c} />;
              })}
                </Card.Body>
              </Card>
              
            </Modal>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Comments;
