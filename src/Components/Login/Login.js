import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';




class Login extends React.Component {
  
  render() {
    const { loginWithRedirect } = this.props.auth0;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            style will be added soon 
          </Card.Text>
      
          <Button onClick={() => loginWithRedirect()} > Login</Button>

        </Card.Body>
      </Card>
    )
  }
}

export default withAuth0(Login);
