import AddTodo from "@/components/add-todo";
import Todos, { TodoProps } from "@/components/todo";
import { readTodos } from "@/lib/actions/todo-actions";

export default async function Home() {
  const todosDetails = (await readTodos(false)) as TodoProps[];
  const completedTodos = (await readTodos(true)) as TodoProps[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      keeptrack
      <div className="flex flex-col space-y-4">
        <Todos todos={todosDetails} />
        <Todos todos={completedTodos} />
      </div>
      <AddTodo />
    </main>
  );
}
