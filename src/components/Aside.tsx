import Link from "next/link";

const Aside = () => {
  return (
    <aside className="bg-indigo-600 py-5 px-10 flex flex-col gap-8 text-white w-[15%]">
      <div>
        <h1 className="text-3xl">
          Task<span className="font-bold">Flow</span>
        </h1>
      </div>

      <div>
        <p>Administra tus tareas</p>
      </div>

      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/tasks">Ver Tareas</Link>
          </li>

          <li>
            <Link href="/tasks/add">Añadir Tareas</Link>
          </li>

          <li>
            <Link href="/users">Ver Usuarios</Link>
          </li>

          <li>
            <Link href="/users/add">Añadir Usuarios</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
