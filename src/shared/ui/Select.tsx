import { TaskFormData } from "@/app/tasks/add/page";
import { UseFormRegister } from "react-hook-form";

interface SelectProps {
  label: string;
  id: keyof TaskFormData;
  register: UseFormRegister<TaskFormData>;
  options?: { value: string | number; label: string }[];
}

const Select = ({ label, id, register, options = [] }: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <select
        className="border rounded-md p-2 border-gray-400 outline-none"
        id={id}
        {...register(id, {
          required: `Selecciona un "${label.toLowerCase()}", es obligatorio`,
        })}
      >
        <option hidden value="">
          Seleccione un {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
