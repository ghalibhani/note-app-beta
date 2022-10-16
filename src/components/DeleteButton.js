import React from "react";
import PropTypes from "prop-types";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function DeleteButton({ id, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="detail-page__action">
      <button
        className="action"
        onClick={() => {
          onDelete(id);
          navigate("/");
        }}
      >
        <BiTrash />
      </button>
    </div>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
