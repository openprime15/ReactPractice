import React from "react";
import "./TodoItem.css";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  //TODO; onToggle / on Remove 구현
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;
