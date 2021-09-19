import React from "react";
import { Card, Form, Button } from 'react-bootstrap';
import PostPlace from "./PostPlace";
import PostForm from "./PostForm";
import './review.css';
import { withAuth0 } from '@auth0/auth0-react';

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            posts: [{},{},{}],
            newPost: {}
        }
    }

    openForm = () =>{this.setState({show:true})};

    closeForm = () =>{this.setState({show:false})};

    poster = (post) =>{
      const { isAuthenticated,logout } = this.props.auth0;
        const { user } = this.props.auth0;
       let postObj = {
          email : user.email,
          userName: user.name,
          userImg: user.picture,
          book: post.book,
          title: post.title,
          review: post.review,
        }
      // this.setState({
      //   newPost : {
         
      //   }
      // })
      console.log(user);
      console.log(postObj);
    }

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
       {this.state.show && <PostForm poster={this.poster} open={this.state.show} close={this.closeForm}/>}

        <Button id='b' href='#post'><p id='up'>Post</p></Button>
      </>
    );
  }
}

export default withAuth0(Review);
