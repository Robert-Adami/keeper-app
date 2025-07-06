import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [currentNote, setCurrentNote] = useState({
    noteTitle: "",
    noteContent: "",
  });
  const [noteArr, setNoteArr] = useState([]);

  function handleChange(e) {
    setCurrentNote((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function submitNote(e) {
    e.preventDefault();
    setNoteArr((prev) => {
      return [...prev, currentNote];
    });
    setCurrentNote({
      noteTitle: "",
      noteContent: "",
    });
  }
  function deleteNote(id) {
    setNoteArr((prev) => prev.filter((element, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea
        handler={handleChange}
        titleValue={currentNote.noteTitle}
        areaValue={currentNote.noteContent}
        submitter={submitNote}
      />
      {noteArr.map((note, index) => (
        <Note
          title={note.noteTitle}
          content={note.noteContent}
          key={index}
          deleter={deleteNote}
          id={index}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
