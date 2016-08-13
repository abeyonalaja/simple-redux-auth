
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{

  handleFormSubmit( {email, password} ) {
    console.log( email, password );
    this.props.signinUser( { email, password } );
  }

  renderAlert(){
    if( this.props.errorMessage ) {
    console.error('grr', this.props.errorMessage);
      return(<div className="alert alert-danger">
        <strong> 00ps!</strong> { this.props.errorMessage }
      </div>
    );
    }
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
        { this.renderAlert() }
        <button className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
  }
}

function mapStateToProps( state ) {
  return { errorMessage : state.auth.error };
}

export default reduxForm( {
  form    : 'signin',
  fields  : [ 'email', 'password' ]
}, mapStateToProps, actions )( Signin );
