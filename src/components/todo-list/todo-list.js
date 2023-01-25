import React from "react";
import {useSelector } from "react-redux";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ onToggleImportant, onToggleDone }) => {
  const { todoData } = useSelector((state) => ({
    todoData: state.todoData,
  }));

  const elements = todoData.map((item) => {
    const { ...itemProps } = item;

    return (
      <li key={itemProps.id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(itemProps.id)}
          onToggleDone={() => onToggleDone(itemProps.id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
