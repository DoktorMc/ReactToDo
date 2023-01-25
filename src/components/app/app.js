import { useEffect, useState } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../todo-add-item";

import "./app.css";
import { useDispatch, useSelector } from "react-redux";


export default function App() {
  const dispatch = useDispatch();

  const { todoData } = useSelector((state) => ({
    todoData: state.todoData,
  }));

  const [filter, setFilter] = useState("");
  const [tern, setTern] = useState("");

  // const deleteItem = (id) => {
  //   this.setState(({ todoData }) => {
  //     const idx = todoData.findIndex((el) => el.id === id);
  //     const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

  //     return {
  //       todoData: newArray,
  //     };
  //   });
  // };

  const searchTodoItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    let queryText = term.toLowerCase();
    return items.filter((el) => ~el.label.toLowerCase().indexOf(queryText));
  };

  const searchText = (tern) => {
    setTern({ tern });
  };

  const filterItem = (items, filter) => {
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

  const filterText = (filter) => {
    setFilter({ filter });
  };

  // const toggleProperty = (arr, id, propName) => {
  //   const idx = arr.findIndex((el) => el.id === id);
  //   // 1. update object
  //   const oldItem = arr[idx];
  //   const newItem = { ...oldItem, [propName]: !oldItem[propName] };
  //   // 2. constructnew array
  //   return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  // };

  // const onToggleImportant = (id) => {
  //   this.setState(({ todoData }) => {
  //     return {
  //       todoData: this.toggleProperty(todoData, id, "important"),
  //     };
  //   });
  // };

  // const noToggleDone = (id) => {
  //   this.setState(({ todoData }) => {
  //     return {
  //       todoData: this.toggleProperty(todoData, id, "done"),
  //     };
  //   });
  // };

  // const visibleItems = filterItem(searchTodoItem(todoData, tern), filter);
  // const doneCount = todoData.filter((el) => el.done).length;
  // const todoCount = todoData.length - doneCount;
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={2} />
      <div className="top-panel d-flex">
        <SearchPanel searchItem={searchText} />
        <ItemStatusFilter filter={filter} filterClick={filterText} />
      </div>

      <TodoList
        todos={todoData}
        // onDeleted={deleteItem}
        // onToggleImportant={onToggleImportant}
        // onToggleDone={noToggleDone}
      />
      <AddItem />
    </div>
  );
}
