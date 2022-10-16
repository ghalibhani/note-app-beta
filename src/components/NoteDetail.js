import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";

function NoteDetail({ id, title, createdAt, body, onDelete }) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <DeleteButton id={id} onDelete={onDelete} />
    </section>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
