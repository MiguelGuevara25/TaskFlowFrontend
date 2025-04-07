import { FieldError } from "react-hook-form";

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  state: string;
  date_deadline: string;
  date_created: string;
  users: User;
}

export interface TaskFormData {
  title: string;
  description: string;
  state: string;
  date_deadline: string;
  date_created: string;
  userId: number;
}

export interface UserFormData {
  username: string;
  email: FieldError | undefined;
}
