
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (CompsoedComponent) {

  class Authentication extends Component {

    static contextTypes = {
      router : React.PropTypes.object
    }

    componentWillMount() {

      if( !this.props.authenticated ) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate( nextProps ) {
      if( !this.props.authenticated ){
        this.context.router.push('/');
      }
    }

    render() {
      return <CompsoedComponent { ...this.props } />
    }
  }

  function mapStateToProps( state ) {
    return { authenticated : state.auth.authenticated };
  }

  return connect( mapStateToProps )( Authentication );
}
