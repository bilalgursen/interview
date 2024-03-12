"use client";
import { useState } from "react";
import Input from "../../components/ui/input";
import { Todos } from "../../types/typeTodos";

export default function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodos = () => {
    if (todo) {
      setTodos([...todos, { todosMessage: todo, id: todos.length + 1 }]);
    }
    setTodo("");
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <h1 className="text-xl font-bold">Mülakat Hazırlığı (Todo-App)</h1>
        <Input todo={todo} setTodo={setTodo} addTodos={addTodos} />
        <div className="flex flex-col justify-start items-start">
          {todos.map((todo, i) => {
            return (
              <>
                <p key={i}>
                  {todo.id} - {todo.todosMessage}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
