import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../todo-add-item";

import "./app.css";

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    tern: "",
    filter: "",
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addTodoItem = (text) => {
    // generated id

    const newItem = this.createTodoItem(text);

    // add element in aaray

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  searchTodoItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    let queryText = term.toLowerCase();
    return items.filter((el) => ~el.label.toLowerCase().indexOf(queryText));
  };

  searchText = (tern) => {
    this.setState({ tern });
  };

  filterItem = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((el) => !el.done);
      case "done":
        return items.filter((el) => el.done);
      default:
        return items;
    }
  };

  filterText = (filter) => {
    this.setState({ filter });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    // 1. update object
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    // 2. constructnew array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  noToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  render() {
    const { todoData, tern, filter } = this.state;

    const visibleItems = this.filterItem(
      this.searchTodoItem(todoData, tern),
      filter
    );
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchItem={this.searchText} />
          <ItemStatusFilter filter={filter} filterClick={this.filterText} />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.noToggleDone}
        />
        <AddItem addItem={this.addTodoItem} />
      </div>
    );
  }
}
