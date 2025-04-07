import {
  FieldValues,
  Path,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  register: UseFormRegister<T>;
  typeInput?: string;
  validations?: RegisterOptions;
}

const Input = <T extends FieldValues>({
  label,
  id,
  register,
  typeInput = "text",
  validations,
}: InputProps<T>) => {
  const defaultValidations: RegisterOptions = {
    required: `El campo "${label.toLowerCase()}" es obligatorio`,
    ...validations,
  };

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        className="border rounded-md p-2 border-gray-400 outline-none"
        id={id}
        type={typeInput}
        {...register(id, defaultValidations)}
        placeholder={`${label}`}
      />
    </>
  );
};

export default Input;
