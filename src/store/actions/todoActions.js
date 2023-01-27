//actions

export const ACTION_ADDTODO = "ACTION_ADDTODO";
export const ACTION_DELETETODO = "ACTION_DELETETODO";
export const ACTION_TOGGLEPROPERTY = "ACTION_TOGGLEPROPERTY";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const addTodo = (text) => ({
  type: ACTION_ADDTODO,
  text,
});

export const deleteTodo = (id) => ({
  type: ACTION_DELETETODO,
  id,
});

export const toggleProperty = (id, prop) => ({
  type: ACTION_TOGGLEPROPERTY,
  id,
  prop,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};