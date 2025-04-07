import { Task, TaskFormData } from "@/shared/types";
import { create } from "zustand";
import axios from "axios";

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  getTasks: () => Promise<void>;
  addTask: (formData: TaskFormData) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  getTasks: async () => {
    const { data } = await axios.get(`${API_URL}/tasks`);
    set({ tasks: data });
  },

  addTask: async (formData: TaskFormData) => {
    await axios.post(`${API_URL}/tasks`, {
      title: formData.title,
      description: formData.description,
      state: formData.state,
      date_deadline: formData.date_deadline,
      date_created: formData.date_created,
      users: { id: Number(formData.userId) },
    });
  },

  deleteTask: async (id: number) => {
    await axios.delete(`${API_URL}/tasks/${id}`);

    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));
