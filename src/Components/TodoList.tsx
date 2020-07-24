import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";
import useTodosA from "../hooks/useTodos";

function TodoList() {
  const todosA: Todo[] = useTodosA(); // 커스텀 훅 사용해서 조회
  console.log(todosA[0].text);
  if (todosA.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todosA.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
