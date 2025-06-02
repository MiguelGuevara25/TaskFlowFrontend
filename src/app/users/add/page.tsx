import FormUsers from "@/components/FormUsers";

const AddUserPage = () => {
  return (
    <section className="min-h-auto gap-5 w-4/5 lg:w-2/5 mx-auto pt-20 space-y-5">
      <h2 className="text-2xl font-bold dark:text-white text-center">Añadir Usuario</h2>

      <FormUsers />
    </section>
  );
};

export default AddUserPage;
