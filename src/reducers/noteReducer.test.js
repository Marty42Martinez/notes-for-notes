import reducer from './noteReducer';
import { NEW_NOTE, NEW_NOTE_PENDING, FETCH_ALL_NOTES_PENDING, FETCH_ALL_NOTES } from '../actions/noteActions';

describe('noteReducer tests', () => {
  it('handles the NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const action = {
      type: NEW_NOTE_PENDING
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the NEW_NOTE action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const action = {
      type: NEW_NOTE,
      payload: {
        title: 'hello',
        body: 'why are you here'
      }
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      list: [{
        title: 'hello',
        body: 'why are you here'
      }]
    });
  });

  it('handles the FETCH_ALL_NOTES_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const action = {
      type: FETCH_ALL_NOTES_PENDING
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the FETCH_ALL_NOTES action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const action = {
      type: FETCH_ALL_NOTES,
      payload: [{
        title: 'Notes are awesome',
        body: 'Wow, you are right'
      }]
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      list: [{
        title: 'Notes are awesome',
        body: 'Wow, you are right'
      }]
    });
  });
  
});
