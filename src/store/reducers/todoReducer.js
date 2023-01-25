import {
  ACTION_ADDTODO,
  ACTION_DELETETODO,
  ACTION_TOGGLEPROPERTY,
} from "../actions/todoActions";

const initialState = {
  todoData: [
 
    
  ],
};

const rootReducer = (state = initialState, action) => {
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
      console.log("id - " + action.id);
      console.log(state.todoData);

      return {
        ...state,
      todoData: state.todoData.filter((obj) => obj.id !== action.id)};

    default:
      return state;
  }
};

export default rootReducer;
