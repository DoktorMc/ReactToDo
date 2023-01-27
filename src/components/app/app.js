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
  const [term, setTerm] = useState("");



  const searchTodoItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    let queryText = term.toLowerCase();
    return items.filter((el) => ~el.label.toLowerCase().indexOf(queryText));
  };

  const searchText = (term) => {
    setTerm({ term });
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
  

  // const visibleItems = filterItem(searchTodoItem(todoData, tern), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel searchItem={searchText} />
        <ItemStatusFilter filter={filter} filterClick={filterText} />
      </div>

      <TodoList/>
      <AddItem />
    </div>
  );
}
