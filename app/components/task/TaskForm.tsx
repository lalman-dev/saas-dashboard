"use client";

import { useState } from "react";
import { Task } from "@/app/types/task";

export default function TaskForm({ onAdd }: { onAdd: (task: Task) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: "todo",
    };

    onAdd(newTask);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-4 rounded-xl shadow"
    >
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}
