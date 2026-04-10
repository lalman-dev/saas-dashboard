"use client";

import { Task } from "@/app/types/task";

export default function TaskList({
  tasks,
  onDelete,
  onUpdate,
}: {
  tasks: Task[];
  onDelete: (id: number) => void;
  onUpdate: (task: Task) => void;
}) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet. Add one 👆</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between"
        >
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.description}</p>
            <span className="text-xs">{task.status}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                onUpdate({
                  ...task,
                  status:
                    task.status === "todo"
                      ? "in-progress"
                      : task.status === "in-progress"
                        ? "done"
                        : "todo",
                })
              }
              className="text-blue-500"
            >
              Update
            </button>

            <button onClick={() => onDelete(task.id)} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
