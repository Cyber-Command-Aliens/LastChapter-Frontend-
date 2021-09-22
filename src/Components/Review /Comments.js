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
import Comment from "./Comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: this.props.id,
      comment: "",
      likeButtonSwitch: false
    };
  }

  likesIncrease = () => {
    // this.setState({
    //   likes : this.state.likes + 1
    // });
    // setTimeout(() => {
    //   this.props.updateLikes(this.state.likes, this.state.id)
    // }, 10);
    let likes = this.props.likes + 1;
    this.props.updateLikes(likes, this.state.id);
    this.setState({
      likeButtonSwitch: true
    })
  };
  likesDecrease = () => {
    // this.setState({
    //   likes : this.state.likes + 1
    // });
    // setTimeout(() => {
    //   this.props.updateLikes(this.state.likes, this.state.id)
    // }, 10);
    let likes = this.props.likes - 1;
    this.props.updateLikes(likes, this.state.id);
    this.setState({
      likeButtonSwitch: false
    })
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
                {this.state.likeButtonSwitch? <Button onClick={() => {this.likesDecrease();}} style={{ width: "15rem" }}>❤️ {this.props.likes} </Button>: <Button onClick={() => { this.likesIncrease(); }} style={{ width: "15rem" }}>♡ {this.props.likes}</Button>}
                  
                  
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      this.setState({ show: true });
                    }}
                    style={{ width: "15rem" }}
                  >
                    💬 {this.props.comments.length}
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <br />
            <Form.Control
              onChange={(e) => {
                this.setState({ comment: e.target.value });
              }}
              type="text"
              placeholder="Comment"
            />
            <Button
              onClick={() => {
                this.pushComment(this.state.comment);
              }}
            >
              {" "}
              Add comments
            </Button>
            <Modal
              show={this.state.show}
              onHide={() => {
                this.setState({ show: false });
              }}
            >
              {this.props.comments.map((c) => {
                return <Comment comment={c} />;
              })}
            </Modal>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Comments;
