import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card,Col,Row,Container} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';


import './profile.css';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            userImg:'',
            email:''
        }
    }
    componentDidMount = () => {

  const { user } = this.props.auth0;
  const email = user.email;
   console.log('User',user);
   const userName=user.name;
   const userImg=user.picture;
   console.log(userImg); 
   this.setState({
    userName:userName,
    userImg:userImg,
    email:email

   })
      console.log(this.state.userImg);  
     this.props.getFavData();
   
    
  
        
    }





    render() {
        return (
            <> 
            <div class="imageProfile">
        <div class="infodiv"> 
          <img src={this.state.userImg} id="imgId"/> 
            <p id="userName">{this.state.userName}</p>
            <p id="userEmail">{this.state.email}</p>
        

                </div>

            </div>
            
          
           
            
                   

           
                {this.props.favourtie.map(item => {
                    return(
                        
                     <Col>
                    <Card style={{ width: '18rem', marginTop: '50px' }}  className="cardprofile">
                        <Card.Header> <a href={item.infoLink}> <Card.Img variant="top" src={item.img} className="cardimage"  /></a> </Card.Header>
                       
                        <Card.Body>
                            <Card.Title className="card__title">{item.title}</Card.Title>

                      
                            
                        </Card.Body>
                        <Card.Footer  > 

                        <Button variant="warning"  outline onClick={() => this.props.deleteBook(item._id)} className="cardButton"><i class="bi bi-trash"> Delete</i></Button>
             
                               

                         </Card.Footer>
                    </Card></Col>  
                    )
                })}


             
           
            </>

        );
    }
}

export default withAuth0(Profile);