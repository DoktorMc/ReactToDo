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
        todoData:[ ...state.todoData,
        {
        text: action.text,
          important: false,
            done: false,
              id: Math.random(),
        },]
  };
    default:
      return state;
  }
};

export default rootReducer;
