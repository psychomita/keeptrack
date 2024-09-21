"use client";
import { deleteTodo } from "@/lib/actions/todo-actions";
import { formatDate } from "@/lib/utils";
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
    <div className="flex flex-col w-[500px] bg-zinc-100 rounded-lg border px-4 p-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">{todo.title}</h1>
        <button
          onClick={async () => {
            await deleteTodo(todo.id);
          }}
          className="text-red-600 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
      <p>{todo.isCompleted}</p>
      <p className="text-sm text-right text-zinc-500/80">
        {formatDate(new Date(todo.createdAt))}
      </p>
    </div>
  );
}

export default function Todos({ todos }: { todos: TodoProps[] }) {
  return (
    <div className="flex flex-col space-y-4">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
