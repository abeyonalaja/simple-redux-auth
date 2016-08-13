
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/';

class SignUp extends Component {
  render () {
    const { handleSubmit,
      fields : { email, password, passwordConfirm } } = this.props;

    return(

      <form>
        <fieldset className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" { ...email }/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" { ...password}/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Confirm Password</label>
          <input type="password" className="form-control" { ...passwordConfirm}/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
};

export default reduxForm({
  form   : 'signup',
  fields : [ 'email', 'password', 'passwordConfirm' ]
})( SignUp );
