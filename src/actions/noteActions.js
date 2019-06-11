import { createAction } from 'promise-middleware-redux';
import { createNote, getAllNotes } from '../services/notesApi';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);

export const [
  fetchAllNotes,
  FETCH_ALL_NOTES,
  FETCH_ALL_NOTES_PENDING
] = createAction('FETCH_ALL_NOTES', getAllNotes);

