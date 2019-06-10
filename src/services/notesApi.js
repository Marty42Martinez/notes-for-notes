export const createNote = note => {
  return Promise.resolve({
    _id: '4242',
    ...note
  });
};
