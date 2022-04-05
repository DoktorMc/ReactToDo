import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    let className = "todo-list-item d-flex justify-content-between";
    if (done) {
      className += " done";
    }

    if (important) {
      className += " important";
    }

    return (
      <div className={className}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
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
            onClick={onDeleted}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    );
  }
}
