"use client";
import { UserFormData } from "@/shared/types";
import { useUserStore } from "@/stores/user-store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import Input from "@/shared/ui/Input";
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
      toast.success("Usuario agregado con éxito");
    } catch (error) {
      console.error(error);
      toast.error("Error al agregar el usuario");
    }
  };
  return (
    <form
      className="flex flex-col gap-5 bg-gray-100 p-10 rounded-md w-2/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Toaster position="top-center" richColors />
      <div className="flex flex-col gap-0.5">
        <Input<UserFormData>
          label="Usuario"
          id="username"
          register={register}
        />
        {errors.username && <Error>{errors.username.message}</Error>}
      </div>

      <div className="flex flex-col gap-0.5">
        <Input<UserFormData>
          label="Email"
          id="email"
          register={register}
          validations={{
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Ingresa un correo electrónico válido",
            },
          }}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </div>

      <Button text="Agregar" typeButton="submit" />
    </form>
  );
};

export default FormUsers;