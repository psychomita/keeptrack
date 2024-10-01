"use client";
import {
  deleteTodo,
  updateTodo,
  updateTodoStatus,
} from "@/lib/actions/todo-actions";
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
  const [isEditing, setIsEditing] = React.useState(false);
  const [title, setTitle] = React.useState(todo.title);

  return (
    <div className="flex flex-col w-full bg-zinc-100 rounded-lg border-2 border-black px-4 p-3">
      <div className="flex justify-between mb-2">
        <div className="flex items-center space-x-3 text-wrap">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onClick={async () => {
              await updateTodoStatus(todo.id, !todo.isCompleted);
            }}
            className={`h-5 w-5 rounded-md text-[#0AE21F] focus:ring-0 focus:ring-offset-0 ${
              todo.isCompleted ? "border-[#0AE21F]" : "border-red-500"
            }`}
          />
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          ) : (
            <h1 className="font-medium text-xl w-[300px] truncate">
              {todo.title}
            </h1>
          )}
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <button
              onClick={() => {
                updateTodo(todo.id, title);
                setIsEditing(!isEditing);
                setTitle(todo.title);
              }}
              className="text-green-500 active:scale-95"
            >
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
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
              className="text-cyan-600 active:scale-95"
            >
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
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
          )}
          <button
            onClick={async () => {
              await deleteTodo(todo.id);
            }}
            className="text-red-600 active:scale-95"
          >
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
      </div>
      <p className="text-xs text-semibold text-right text-zinc-500/80">
        {formatDate(new Date(todo.updatedAt))}
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
