import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Row from "react-bootstrap/Row";
import BookCards from "./BookCards";
import Profile from "../Profile/Profile";
import Review from "../Review /Review";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

class Home extends React.Component {
  render() {
    // console.log(this.state.catgories)
    return (
      <>
        <Row xs={2} md={4} lg={6}>
          {this.props.catgories.map((item) => {
            return (
              <BookCards
                favourite={this.props.favourite}
                item={item}
              ></BookCards>
            );
          })}
        </Row>
      </>
    );
  }
}

export default withAuth0(Home);
