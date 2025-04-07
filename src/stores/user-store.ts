import { User, UserFormData } from "@/shared/types";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { create } from "zustand";

interface UserStore {
  users: User[];
  setUsers: (user: User[]) => void;
  getUsers: () => Promise<void>;
  addUsers: (formData: UserFormData) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),

  getUsers: async () => {
    const { data } = await axios.get(`${API_URL}/users`);
    set({ users: data });
  },

  addUsers: async (formData: UserFormData) => {
    await axios.post(`${API_URL}/users`, {
      username: formData.username,
      email: formData.email,
    });
  },

  deleteUser: async (id: number) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);

      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
      }));
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
      } else {
        console.error("Error desconocido:", error);
      }
    }
  },
}));
