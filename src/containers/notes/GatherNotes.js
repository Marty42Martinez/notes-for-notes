import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/noteActions';
import NoteList from '../../components/notes/NoteList';
import { getNotes, getNotesLoading } from '../../selectors/noteSelectors';

class GatherNotes extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, loading } = this.props;

    if(loading) return <h1>Loading...</h1>;
    return <NoteList notes={notes} />;
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state),
  loading: getNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchAllNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GatherNotes);
