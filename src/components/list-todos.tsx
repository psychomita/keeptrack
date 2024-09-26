import { readTodos } from '@/lib/actions/todo-actions'
import React from 'react'

type Props = {}

export default async function ListTodos({}: Props) {
    const todos = await readTodos();
  return (
    <pre>{JSON.stringify(todos,null,2)}</pre>
  )
}