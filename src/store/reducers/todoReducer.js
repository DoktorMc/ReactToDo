import {
  ACTION_ADDTODO,
  ACTION_DELETETODO,
  ACTION_TOGGLEPROPERTY,
} from "../actions/todoActions";

const initialState = {
  todoData: [
    {
      text: "123456",
      important: false,
      done: false,
      id: 1,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADDTODO:
      console.log(action.type + " " + action.text);
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
      console.log('id - ' + action.id);
      const idx = state.todoData.findIndex((el) => el.id === action.id);
        const newArray = [
          ...state.todoData.slice(0, idx),
          ...state.todoData.slice(idx + 1),
        ];

        return {
          ...state,
          todoData: newArray,
        };
    default:
      return state;
  }
};

export default rootReducer;
