export const getNoteState = state => state.notes;
export const getNotes = state => getNoteState(state).list;
export const getNotesLoading = state => getNoteState(state).loading;
