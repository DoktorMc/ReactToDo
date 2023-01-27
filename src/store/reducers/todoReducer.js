import {
  ACTION_ADDTODO,
  ACTION_DELETETODO,
  ACTION_TOGGLEPROPERTY,
} from "../actions/todoActions";

const initialState = {
  todoData: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADDTODO:
      return {
        ...state,
        todoData: [
          ...state.todoData,
          {
            text: action.text,
            important: false,
            done: false,
            id: Math.random(),
          },
        ],
      };

    case ACTION_DELETETODO:
      return {
        ...state,
        todoData: state.todoData.filter((obj) => obj.id !== action.id),
      };

    case ACTION_TOGGLEPROPERTY:
      if (action.prop === "done") {
        return {
          ...state,
          todoData: state.todoData.map((todo) =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo
          ),
        };
      } else if (action.prop === "important") {
        return {
          ...state,
          todoData: state.todoData.map((todo) =>
            todo.id === action.id
              ? { ...todo, important: !todo.important }
              : todo
          ),
        };
      }

    default:
      return state;
  }
};


export default todoReducer;
