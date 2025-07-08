import DeleteIcon from "@mui/icons-material/Delete";

function Note({ title, content, deleter, id}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => deleter(id)}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
