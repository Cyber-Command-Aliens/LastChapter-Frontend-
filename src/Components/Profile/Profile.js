import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    componentDidMount = () => {
     this.props.getFavData();
    
        
    }

    



    render() {
        return (
            <>
                {this.props.favourtie.map(item => {
                    return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.infoLink}
                            </Card.Text>
                            <Card.Text>
                              <p> status: {item.status} </p>
                            </Card.Text>
                            <Card.Text>
                              <p> Author: {item.author} </p>
                            </Card.Text>
                            <Card.Text>
                              <p> Pages: {item.pages} </p>
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.props.deleteBook(item._id)} >Delete</Button>
                        </Card.Body>
                    </Card>
                    )
                })}

            </>

        );
    }
}

export default withAuth0(Profile);