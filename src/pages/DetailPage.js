import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote } from "../utils/api";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate("/");
  }
  return <DetailPage id={id} onDelete={onDeleteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null,
    };
  }

  async componentDidMount() {
    const note = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: note.data,
      };
    });
  }

  render() {
    return <NoteDetail {...this.state.note} onDelete={deleteNote} />;
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
