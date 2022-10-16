import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div>
            <h2>{locale === "id" ? "Tambah Catatan" : "Add Note"}</h2>
            <NoteInput addNote={onAddNoteHandler} />
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default AddPage;
