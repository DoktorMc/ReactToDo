import React, { Component } from "react";

import "./todo-add-item.css";

export default class TodoAddItem extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="add-item d-flex"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control add-input"
          onChange={this.onLabelChange}
          placeholder="What need to be done"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add Item
        </button>
      </form>
    );
  }
}
