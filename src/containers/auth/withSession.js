import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/sessionSelectors';

export const withSession = Component => {
  class withSession extends PureComponent {
    static propTypes = {

    }

    componentDidMount() {

    }

    render() {
      return <Component />;
    }
  }
  const mapStateToProps = state => ({
    token: getToken(state)
  });

  return connect(
    mapStateToProps,
    null
  )(withSession);
};
