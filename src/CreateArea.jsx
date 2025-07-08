import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import { useState } from "react";

function CreateArea({ handler, titleValue, areaValue, submitter }) {
  const [boolean, setBoolean] = useState(false);
  function handleBoolean() {
    setBoolean(true);
  }
  return (
    <div>
      <form className="create-note">
        {boolean ? (
          <input
            name="noteTitle"
            placeholder={boolean === true ? "Title" : " "}
            onChange={handler}
            value={titleValue}
          />
        ) : null}
        <textarea
          name="noteContent"
          placeholder="Take a note..."
          rows={boolean ? "3" : "1"}
          onChange={handler}
          value={areaValue}
          onClick={handleBoolean}
        />
        <Zoom in={boolean}>
          <Fab onClick={submitter}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
