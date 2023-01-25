import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
import "./todo-add-item.css";

export default function TodoAddItem() {
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(label);
    dispatch(addTodo(label));
    setLabel('');
  };

  return (
    <form className="add-item d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control add-input"
        onChange={onLabelChange}
        placeholder="What need to be done"
        value={label}
      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
}
