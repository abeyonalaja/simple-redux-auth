
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component{

  handleFormSubmit( {email, password} ) {
    console.log( email, password );
  }

  render() {
    const {
      handleSubmit,
      fields: { email, password }
    } = this.props

    return(
      <div>
        <form onSubmit={ handleSubmit( this.handleFormSubmit.bind( this )) }>
          <fieldset className="form-group">
            <label >Email:</label>
            <input type="text" className="form-control" { ...email } />
          </fieldset>
        <fieldset className="form-group">
          <label >Password:</label>
          <input type="password" className="form-control" { ...password }/>
        </fieldset>
        <button className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
  }
}

export default reduxForm( {
  form    : 'signin',
  fields  : [ 'email', 'password' ]
} )( Signin );
