function CreateArea({ handler, titleValue, areaValue, submitter }) {
  return (
    <div>
      <form>
        <input name="noteTitle" placeholder="Title" onChange={handler} value={titleValue}/>
        <textarea name="noteContent" placeholder="Take a note..." rows="3" onChange={handler} value={areaValue}/>
        <button onClick={submitter}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
