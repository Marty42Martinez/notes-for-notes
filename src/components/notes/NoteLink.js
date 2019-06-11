import React from 'react';
import PropTypes from 'prop-types';

function NoteLink({ note }) {
  return (
    <>
      <p>{note.title}</p>
    </>
  );
}

NoteLink.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.string
  })
};

export default NoteLink;
