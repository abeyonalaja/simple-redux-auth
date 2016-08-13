
'use strict';

import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  SIGN_OUT
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser( { email, password }) {

  return function( dispatch ) {

    // Submit email&&password to the server
      axios.post( `${ROOT_URL}/signin`, { email, password} )
      .then(response => {

        // If request is good
        // Update state to indicate user is authenticated
        dispatch( { type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem( 'token', response.data.token );
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch( () => {
        // If request is bad...
        // - Sohow an error to the user
        dispatch( authError( ' Bad Login Info' ) );
      });
  }
}

export function signOutUser(){

    localStorage.removeItem('token');
     browserHistory.push( '/' );
   return { type: SIGN_OUT };
}

export function authError( error ) {
  console.log("err0r ",  error);
  return {
    type    : AUTH_ERROR,
    payload : error
  };
}
