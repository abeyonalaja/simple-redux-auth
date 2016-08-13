
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/';

class Header extends Component {

  onSignOut() {
    console.log("Log out");
    this.props.signOutUser();
  }

  renderLinks() {

    if( this.props.authenticated ) {
      return(
        <li className="nav-item">
          <button className="nav-link" onClick={ this.onSignOut.bind(this) }>Sign Out</button>
        </li>
      );
    } else {
      return [
        <li className="nav-item">
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,

        <li className="nav-item" >
          <Link to="/signup"  className="nav-link" >Sign up</Link>
        </li>
      ];
    }
  }

  render () {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          { this.renderLinks() }
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {  authenticated : state.auth.authenticated }
}

export default connect( mapStateToProps, actions)( Header );
