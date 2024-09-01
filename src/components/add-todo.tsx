import { createTodo } from "@/lib/actions/todo-actions";
import React from "react";

export default function AddTodo() {
  return (
    <form action={createTodo}>
      <input name="input" type="text" placeholder="Add Todo..."></input>
      <button type="submit">add</button>
    </form>
  );
}
