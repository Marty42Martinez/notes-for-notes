import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newNote } from '../../actions/noteActions';
import NoteForm from '../../components/notes/NoteForm';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  render() {
    const { title, body } = this.state;

    return (
      <>
        <NoteForm title={title} body={body} submitText="Create Note" />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
