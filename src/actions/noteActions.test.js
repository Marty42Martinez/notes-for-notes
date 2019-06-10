import { newNote } from './noteActions';

jest.mock('../services/notesApi.js', () => ({
  createNote() {
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
});
