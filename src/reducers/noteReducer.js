import { NEW_NOTE_PENDING } from '../actions/noteActions';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    default:
      return state
  }
}

