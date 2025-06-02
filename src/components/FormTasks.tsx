"use client";
import { useUserStore } from "@/stores/user-store";
import { useTaskStore } from "@/stores/task-store";
import { TaskFormData } from "@/shared/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Select from "@/shared/ui/Select";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Error from "@/components/Error";

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
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: TaskFormData) => {
    const newTask = { ...data, state: "PENDING" };
    await addTask(newTask);
    reset();
    router.push("/tasks");
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <form
      className="flex flex-col gap-5 bg-gray-100 p-10 rounded-md w-2/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-0.5">
        <Input label="Título" id="title" register={register} />
        {errors.title && <Error>{errors.title.message}</Error>}
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-0.5 flex-1">
          <label htmlFor="date_created">Fecha Creación:</label>
          <input
            className="border disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 rounded-md p-2 border-gray-400 outline-none"
            id="date_created"
            type="date"
            placeholder="Fecha Creación"
            disabled
            defaultValue={today}
          />
        </div>

        <div className="flex flex-col gap-0.5 flex-1">
          <Input
            label="Fecha Límite"
            id="date_deadline"
            register={register}
            typeInput="date"
          />
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <Select
          label="Encargado"
          id="userId"
          register={register}
          options={users.map((user) => ({
            value: user.id,
            label: user.username,
          }))}
        />
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
