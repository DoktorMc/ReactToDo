//actions

export const ACTION_ADDTODO = "ACTION_ADDTODO";
export const ACTION_DELETETODO = "ACTION_DELETETODO";
export const ACTION_TOGGLEPROPERTY = "ACTION_TOGGLEPROPERTY";

export const addTodo = (text) => ({
  type: ACTION_ADDTODO,
  text
});

export const deleteTodo = () => ({
  type: ACTION_DELETETODO,
});

export const toggleProperty = (arr, id, property) => ({
  type: ACTION_DELETETODO,
  arr,
  id,
  property,
});
