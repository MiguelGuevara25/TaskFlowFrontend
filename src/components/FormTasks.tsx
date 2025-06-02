"use client";
import { useUserStore } from "@/stores/user-store";
import { useTaskStore } from "@/stores/task-store";
import { TaskFormData } from "@/shared/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Error from "@/components/Error";
import { today } from "@/shared/utils";

const FormTasks = () => {
  const { addTask } = useTaskStore();
  const { users, getUsers } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>();

  const router = useRouter();

  const onSubmit = async (data: TaskFormData) => {
    const newTask = { ...data, status: "PENDING" as const };
    await addTask(newTask);
    reset();
    router.push("/tasks");
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <form
      className="flex flex-col gap-5 bg-gray-100 p-10 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-0.5">
        <Input label="Título" id="title" register={register} />
        {errors.title && <Error>{errors.title.message}</Error>}
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-0.5 flex-1">
          <label htmlFor="dateCreated">Fecha Creación:</label>
          <input
            className="border disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 rounded-md p-2 border-gray-400 outline-none"
            id="dateCreated"
            type="date"
            placeholder="Fecha Creación"
            disabled
            defaultValue={today}
          />
        </div>

        <div className="flex flex-col gap-0.5 flex-1">
          <label htmlFor="deadline">Fecha Límite:</label>
          <input
            className="border disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 rounded-md p-2 border-gray-400 outline-none"
            id="deadline"
            type="date"
            placeholder="Fecha Límite"
            {...register("deadline", {
              required: `El campo "fecha límite" es obligatorio`,
              validate: (value) => {
                if (value < today) {
                  return "La fecha límite no puede ser anterior a la fecha actual";
                }
                return true;
              },
            })}
          />
          {errors.deadline && <Error>{errors.deadline.message}</Error>}
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <label htmlFor="userId">Encargado:</label>
        <select
          className="border rounded-md p-2 border-gray-400 outline-none"
          id="userId"
          {...register("userId", {
            required: `Selecciona un "Encargado", es obligatorio`,
          })}
        >
          <option hidden value="">
            Seleccione un Encargado
          </option>
          {users.map((option) => (
            <option key={option.id} value={option.id}>
              {option.username}
            </option>
          ))}
        </select>
        {errors.userId && <Error>{errors.userId.message}</Error>}
      </div>

      <div className="flex flex-col gap-0.5">
        <label htmlFor="description">Descripción:</label>
        <textarea
          className="border rounded-md p-2 border-gray-400 outline-none"
          id="description"
          {...register("description", {
            required: `El campo "descripción" es obligatorio`,
          })}
          placeholder="Descripción"
          rows={4}
        ></textarea>
        {errors.description && <Error>{errors.description.message}</Error>}
      </div>

      <Button text="Agregar" typeButton="submit" />
    </form>
  );
};

export default FormTasks;
