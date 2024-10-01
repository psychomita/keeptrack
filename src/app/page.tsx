import AddTodo from "@/components/add-todo";
import Logo from "@/components/logo";
import Todos, { TodoProps } from "@/components/todo";
import { readTodos } from "@/lib/actions/todo-actions";
import { formatDateLong } from "@/lib/utils";

export default async function Home() {
  const todosDetails = (await readTodos(false)) as TodoProps[];
  const completedTodos = (await readTodos(true)) as TodoProps[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex justify-between items-center w-full max-w-lg">
        <Logo className="w-56 h-auto" />
        <p className="text-zinc-700 italic">{formatDateLong(new Date())}</p>
      </div>
      <div className="flex flex-col space-y-4 mt-8 w-full max-w-lg">
        <Todos todos={todosDetails} />
        <Todos todos={completedTodos} />
        <div>
          <AddTodo />
        </div>
        <p className="text-center text-sm text-zinc-500">
          Made by <a href="https://github.com/psychomita" className="text-pink-600">@psychomita</a>
        </p>
      </div>
    </main>
  );
}
