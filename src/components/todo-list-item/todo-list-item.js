import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleProperty } from "../../store/actions/todoActions";

import "./todo-list-item.css";

export default function TodoListItem({
  text,
  id,
  important,
  done,
}) {
  const dispatch = useDispatch();

  let className = "todo-list-item d-flex justify-content-between";
  if (done) {
    className += " done";
  }

  if (important) {
    className += " important";
  }

  const onDeleted = (id) => {
    dispatch(deleteTodo(id));
  }

  const onToggle = (id, prop) => {
     dispatch(toggleProperty(id, prop));
  }

  return (
    <div className={className}>
      <span
        className="todo-list-item-label"
        onClick={() => onToggle(id, "done")}
      >
        {text}
      </span>
      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-sm "
          onClick={() => onToggle(id, "important")}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm "
          onClick={() => onDeleted(id)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
}
