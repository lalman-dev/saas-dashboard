"use client";

import { useState } from "react";
import { Task } from "@/app/types/task";
import TaskForm from "@/app/components/task/TaskForm";
import TaskList from "@/app/components/task/TaskList";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (updated: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <TaskForm onAdd={addTask} />

      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
}
