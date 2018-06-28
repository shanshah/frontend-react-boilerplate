import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sampleActions } from '../actions/sampleAction';

@connect(store => ({ sampleData: store.sampleDataReducer }))
class Contact extends Component {
  componentDidMount() {
    this.props.dispatch(sampleActions.sampleActionName());
  }
  render () {
    return (
      <div>
        <div>Contact</div>
        <Link to="/another">Go to another page</Link>
      </div>
    )
  }
}

export default Contact;