import AddTodo from "@/components/add-todo";
import Todos, { TodoProps } from "@/components/todo";
import { readTodos } from '@/lib/actions/todo-actions';

export default async function Home() {
  const todosDetails = await readTodos() as TodoProps[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
     keeptrack
     <AddTodo/>
     <Todos todos={todosDetails}/>
    </main>
  );
}
