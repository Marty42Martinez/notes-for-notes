import React from 'react';
import PropTypes from 'prop-types';
import NoteLink from './NoteLink';

function NoteList({ notes }) {
  const ListOfNotes = notes.map(note => (
    <li key={note._id}>
      <NoteLink note={note} />
    </li>
  ));

  return (
    <ul>
      {ListOfNotes}
    </ul>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.string
  })).isRequired
};

export default NoteList;
