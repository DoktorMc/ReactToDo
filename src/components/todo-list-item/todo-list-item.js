import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/actions/todoActions";

import "./todo-list-item.css";

export default function TodoListItem({
  text,
  id,
  // onDeleted,
  onToggleImportant,
  onToggleDone,
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
 
  return (
    <div className={className}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {text}
      </span>
      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-sm "
          onClick={onToggleImportant}
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
