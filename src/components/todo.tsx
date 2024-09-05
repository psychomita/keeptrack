import React from "react";

export type TodoProps = {
  id: string;
  title: string;
  isCompleted: boolean;
  updatedAt: Date;
  createdAt: Date;
};

function Todo({ todo }: { todo: TodoProps }) {
  return (
    <div className="flex flex-col bg-zinc-100 rounded-lg border p-2">
      <h1>{todo.title}</h1>
      <p>{todo.isCompleted}</p>
      <p>{new Date(todo.createdAt).toString()}</p>
    </div>
  );
}

export default function Todos({ todos }: { todos: TodoProps[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
