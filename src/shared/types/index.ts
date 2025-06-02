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
  status: string;
  deadline: string;
  dateCreated: string;
  user: User;
}

export interface TaskFormData {
  title: string;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  date_deadline: string;
  date_created: string;
  userId: number;
}

export interface UserFormData {
  username: string;
  email: FieldError | undefined;
}
