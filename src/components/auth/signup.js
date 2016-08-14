
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/';

class SignUp extends Component {

  handleFormSubmit( formProps ) {
      //call action creator to sign up the user!
      this.props.signupUser( formProps );
  }

  renderAlert(){

    console.log("render alert");
    if(this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <strong>Oops</strong> { this.props.errorMessage}
        </div>
      );
    }
  }

  render () {
    const { handleSubmit,
      fields : { email, password, passwordConfirm } } = this.props;

    return(

      <form onSubmit={ handleSubmit( this.handleFormSubmit.bind( this ) ) }>
        <fieldset className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" { ...email }/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" { ...password}/>
          {
            password.touched &&  password.error &&
            <div className="error">
              { password.error }
              </div>
          }
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Confirm Password</label>
          <input type="password" className="form-control" { ...passwordConfirm}/>
        </fieldset>
        { this.renderAlert() }
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
};

function mapStateToProps( state ) {
  return { errorMessage : state.auth.error };
}

function validate( formProps ) {
  const errors = {};

  if( formProps.password !== formProps.passwordConfirm ) {
    errors.password = 'Passwords must match';
  }
  return errors;
}

export default reduxForm({
  form   : 'signup',
  fields : [ 'email', 'password', 'passwordConfirm' ],
  validate
}, mapStateToProps, actions )( SignUp );
