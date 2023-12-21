"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      next: {
        revalidate: 120,
      },
    })
      .then((response) => response.json())
      .then((result) => setTodo(result));
  }, []);
  return (
    <div>
      <h1 className="bg-purple-600 text-white text-4xl">{todo.title}</h1>
    </div>
  );
}
