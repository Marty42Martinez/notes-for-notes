import { newNote, fetchAllNotes } from './noteActions';

jest.mock('../services/notesApi.js', () => ({
  createNote() {
    return Promise.resolve([]);
  },
  getAllNotes() {
    return Promise.resolve([]);
  }
}));

describe('noteAction creator tests', () => {
  it('dispatches 4 actions when newNote is invoked', () => {

    const noteAction = newNote();

    expect(noteAction).toEqual({
      type: 'NEW_NOTE',
      payload: expect.any(Promise),
      pendingType: 'NEW_NOTE_PENDING',
      fulfilledType: 'NEW_NOTE_FULFILLED',
      rejectedType: 'NEW_NOTE_REJECTED'
    });

  });

  it('dispatches 4 actions when fetchAllNotes is invoked', () => {

    const noteAction = fetchAllNotes();

    expect(noteAction).toEqual({
      type: 'FETCH_ALL_NOTES',
      payload: expect.any(Promise),
      pendingType: 'FETCH_ALL_NOTES_PENDING',
      fulfilledType: 'FETCH_ALL_NOTES_FULFILLED',
      rejectedType: 'FETCH_ALL_NOTES_REJECTED'
    });

  });
});
