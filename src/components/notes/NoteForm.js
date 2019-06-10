import React from 'react';
import PropTypes from 'prop-types';



function NoteForm({ onSubmit, onChange, title, body, submitText }) {
  return (

  )
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

NoteForm.defaultProps = {
  submitText: 'Submit'
};

export default NoteForm;

