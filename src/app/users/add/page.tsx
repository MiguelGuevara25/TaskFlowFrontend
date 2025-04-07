import FormUsers from "@/components/FormUsers";

const AddUserPage = () => {
  return (
    <section className="flex items-center justify-center h-screen flex-col gap-5">
      <h2 className="text-2xl font-bold">Añadir Usuario</h2>

      <FormUsers />
    </section>
  );
};

export default AddUserPage;
