"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }
  await prisma.todo.create({
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}

export async function readTodos() {
  const data = await prisma.todo.findMany({orderBy: {
    createdAt: "desc"
  }});
  return data;
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}

export async function updateTodoStatus(id: string, isCompleted: boolean) {
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      isCompleted: isCompleted,
    },
  });
  revalidatePath("/");
}