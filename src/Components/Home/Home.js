import React from 'react';
import axios from 'axios'
class Home extends React.Component {
    gettingBooks = () => {
      axios.get('http://localhost:3001/')
      .then((results) => {
        console.log(results.data);
      })
    }
    render() { 
        return (
            <>
            <button onClick = {this.gettingBooks}>Click me</button>
            </>
        );
    }
}
 
export default Home;