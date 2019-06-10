import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CreateNote extends PureComponent {
  static propTypes = {

  }

  state = {

  }

  render() {

    return (
      <>
        <h1>Made it!</h1>
      </>
    );
  }
}

export default connect(
  null,
  null
)(CreateNote);
