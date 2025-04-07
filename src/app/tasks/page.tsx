"use client";
import Tasks from "@/components/Tasks";
import { useTaskStore } from "@/stores/task-store";
import { useEffect, useState } from "react";

const TaskPage = () => {
  const { getTasks } = useTaskStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      await getTasks();
      setIsLoading(false);
    };
    fetchTasks();
  }, [getTasks]);

  return (
    <div className="w-[85%] mx-auto pt-20">
      <section className="flex items-center justify-center gap-20">
        <Tasks isLoading={isLoading} />
      </section>
    </div>
  );
};

export default TaskPage;
