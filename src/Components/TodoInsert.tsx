import React, { useState } from "react";
import useAddTodo from "../hooks/useAddTodos";

function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: 이부분에 새 항복 등록
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
