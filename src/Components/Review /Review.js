import React from "react";
import { Card, Form, Button } from 'react-bootstrap';
import PostPlace from "./PostPlace";
import PostForm from "./PostForm";
import './review.css';

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            posts: [{},{},{}]
        }
    }

    openForm = () =>{this.setState({show:true})};

    closeForm = () =>{this.setState({show:false})};
  render() {
    return (
      <>
        <Card id='post' style={{width: '60rem', margin: '50px auto' }}>
          <Card.Header>What is your Opinion . . .</Card.Header>
          <Card.Body>
          <Form.Control onClick={this.openForm} as="textarea" rows={2} placeholder='Select a book, and give your opinion about it ...' />
          </Card.Body>
        </Card>

        {this.state.posts.map(book => {
            return <PostPlace book={book}/>
        })}
        <PostForm open={this.state.show} close={this.closeForm}/>

        <Button id='b' href='#post'><p id='up'>Post</p></Button>
      </>
    );
  }
}

export default Review;
