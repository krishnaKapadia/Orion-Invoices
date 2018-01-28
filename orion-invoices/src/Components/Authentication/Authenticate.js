import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
* Ensures that the user is logged in, in order to use the app.
* Otherwise user gets directed to login/register page.
* Connected to Redux global state
*/
class Authenticate extends Component {

  componentDidMount() {
    const { dispatch, currentURL } = this.props;

    if(!this.props.isLoggedIn) {

      console.log("User not logged in");

      // Redirect
      // browserHistory.replace('/')
    }
  }

  render() {
    return (
      <div></div>
    );
  }

}

/**
* Sets props to be accessed by the Authenticate component from redux
* global state
*/
function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

// Connects the set props to the Authenticate component
export default connect(mapStateToProps)(Authenticate);
