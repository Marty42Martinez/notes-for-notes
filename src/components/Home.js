import React from 'react';
import CreateNote from '../containers/notes/CreateNote';
import GatherNotes from '../containers/notes/GatherNotes';

export default function Home() {
  return (
    <>
      <CreateNote />
      <GatherNotes />
    </>
  );
}
