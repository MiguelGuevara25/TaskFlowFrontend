"use client";
import { UserFormData } from "@/shared/types";
import { useUserStore } from "@/stores/user-store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import Error from "@/components/Error";
import Button from "@/shared/ui/Button";

const FormUsers = () => {
  const { addUsers } = useUserStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>();

  const router = useRouter();

  const onSubmit = async (data: UserFormData) => {
    try {
      await addUsers(data);
      reset();
      router.push("/users");
      toast.success("Usuario agregado correctamente");
    } catch (error) {
      console.error(error);
      toast.error("Error al agregar el usuario");
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <form
        className="flex flex-col gap-5 bg-gray-100 p-10 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-0.5">
          <label htmlFor="username">Usuario:</label>
          <input
            className="border rounded-md p-2 border-gray-400 outline-none"
            id="username"
            type="text"
            placeholder="Usuario"
            {...register("username", {
              required: `El campo "usuario" es obligatorio`,
            })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="email">Email:</label>
          <input
            className="border rounded-md p-2 border-gray-400 outline-none"
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: `El campo "email" es obligatorio`,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Ingresa un correo electrónico válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <Button text="Agregar" typeButton="submit" />
      </form>
    </>
  );
};

export default FormUsers;
