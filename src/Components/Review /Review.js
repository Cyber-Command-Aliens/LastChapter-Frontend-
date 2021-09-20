import React from "react";
import { Card, Form, Button } from 'react-bootstrap';
import PostPlace from "./PostPlace";
import PostForm from "./PostForm";
import './review.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            posts: [],
        }
    }

    componentDidMount = () =>{
      this.props.getFavData();
      console.log(this.props.favBooks);
      axios
      .get(`http://localhost:3001/getposts`)
      .then(
        result =>{
          this.setState({
            posts : result.data.reverse()
          })
        }
        )
        .catch(err=>console.log(err))
      }

    openForm = () =>{this.setState({show:true})};

    closeForm = () =>{this.setState({show:false})};

    poster = (post) =>{
      const { isAuthenticated,logout } = this.props.auth0;
        const { user } = this.props.auth0;
       let postObj = {
          userName: user.name,
          userImg: user.picture,
          book: post.book,
          title: post.title,
          review: post.review,
          like : 0
        }
      console.log(user);
      console.log(postObj); 
      axios
      .post(`http://localhost:3001/post`,postObj)
      .then(
        result =>{
        
          this.setState({
            show: false,
            posts : result.data.reverse()
          })
        }
        )
        .catch(err=>console.log(err))
      }
     
      deleteHandler =(id)=>{
        axios
        .delete(`http://localhost:3001/deletepost/${id}`)
        .then(
          result =>{
          
            this.setState({
              posts : result.data.reverse()
            })
          }
          )
          .catch(err=>console.log(err))
      }
    
      updateLikes=(like, id)=>{
        console.log(like);
        console.log(id);
        
        axios
        .put(`http://localhost:3001/updatelikes/${id}`,{like})
        .then(result=>{
          this.setState({
            posts : result.data.reverse()
          })
        })
        .catch(err=>console.log(err))

      }
    render() {
    // console.log(this.state.posts);
    return (
      <>
        <Card id='post' style={{width: '60rem', margin: '50px auto' }}>
          <Card.Header>What is your Opinion . . .</Card.Header>
          <Card.Body>
          <Form.Control onClick={this.openForm} as="textarea" rows={2} placeholder='Select a book, and give your opinion about it ...' />
          </Card.Body>
        </Card>

        {this.state.posts.map(book => {
            return this.state.posts===[]?false : <PostPlace updateLikes={this.updateLikes} delete={this.deleteHandler} book={book}/>; 
        })}
       {this.state.show && <PostForm fB={this.props.favBooks} poster={this.poster} open={this.state.show} close={this.closeForm}/>}

        <Button id='b' href='#post'><p id='up'>Post</p></Button>
      </>
    );
  }
}

export default withAuth0(Review);
