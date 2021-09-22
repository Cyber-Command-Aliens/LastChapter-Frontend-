import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Row from "react-bootstrap/Row";
import BookCards from "./BookCards";
import Profile from "../Profile/Profile";
import Carousel from 'react-bootstrap/Carousel';
import Review from "../Review /Review";
import {HomeWrapper} from './BookCardStyle'
import FilterClassics from './Classics'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

class Home extends React.Component {
  componentDidMount = () =>{
    this.props.getFavData();
  }
  render() {
    // console.log(this.state.catgories)
    return (
      <>
      <HomeWrapper>

      <BookCards favourite={this.favourite}  catgories={this.props.catgories} ></BookCards>
      <FilterClassics favourite={this.favourite}  catgories={this.props.catgories}></FilterClassics>
      </HomeWrapper>
      
        
      </>
    );
  }
}

export default withAuth0(Home);
