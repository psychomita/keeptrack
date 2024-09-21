import { createTodo } from "@/lib/actions/todo-actions";
import React from "react";

export default function AddTodo() {
  return (
    <form action={createTodo} className="flex flex-row justify-between bg-zinc-200 p-3 mt-10 w-[500px] rounded-lg">
      <input className="bg-transparent outline-none border-0" name="input" type="text" placeholder="Add Todo..."></input>
      <button className="px-4 py-1.5 bg-black text-white rounded-md font-bold" type="submit">Add</button>
    </form>
  );
}
