import FormTasks from "@/components/FormTasks";

const AddTaskPage = () => {
  return (
    <section className="flex items-center justify-center h-screen flex-col gap-5">
      <h2 className="text-2xl font-bold dark:text-white">Añadir Tarea</h2>

      <FormTasks />
    </section>
  );
};

export default AddTaskPage;
