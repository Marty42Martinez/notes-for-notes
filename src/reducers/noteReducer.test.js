import reducer from './noteReducer';
import { NEW_NOTE, NEW_NOTE_PENDING } from '../actions/noteActions';

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
  
});
