import * as TodoApiUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
});

export const fetchTodos = () => (dispatch) => (
  TodoApiUtil.fetchTodos().then(todos => (
    dispatch(receiveTodos(todos))
  ))
);

export const createTodo = (todo) => (dispatch) => (
  TodoApiUtil.addTodo(todo).then(storedTodo => (
    dispatch(receiveTodo(storedTodo))
  ))
);
