import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSession } from '../../actions/sessionActions';

class Callback extends PureComponent {
  static propTypes = {

  }

  componentDidMount() {

  }

  render() {
    return <h1>CALLBACK</h1>;
  }
}