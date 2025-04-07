import DeleteIcon from "@/assets/svgs/Delete";
import EditIcon from "@/assets/svgs/Edit";
import SearchIcon from "@/assets/svgs/Search";
import { useUserStore } from "@/stores/user-store";
import { Fragment } from "react";
import { Toaster } from "sonner";

interface UsersProps {
  isLoading: boolean;
}

const Users = ({ isLoading }: UsersProps) => {
  const { users, deleteUser } = useUserStore();

  return (
    <div className="flex flex-col w-full h-full text-slate-700 bg-white shadow rounded-md">
      <Toaster position="top-center" richColors />
      {!isLoading && (
        <div className="m-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Usuarios</h3>

              <p className="text-slate-500">
                {users.length > 0
                  ? "Aquí puedes ver los usuarios registrados en el sistema"
                  : "Agrega usuarios para que puedas visualizarlas"}
              </p>
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full p-10 text-slate-500">
          <p>Cargando usuarios...</p>
        </div>
      ) : users.length > 0 ? (
        <table className="w-full text-left min-w-max">
          <thead>
            <tr className="bg-slate-50 text-slate-500 [&>th]:p-4 [&>th]:border-y [&>th]:border-slate-200 [&>th>p]:flex [&>th>p]:items-center [&>th>p]:justify-between [&>th>p]:gap-2 [&>th>p]:text-sm [&>th>p]:font-normal">
              <th>
                <p>Usuario</p>
              </th>
              <th>
                <p>Correo</p>
              </th>
              <th>
                <p>Fecha de creación</p>
              </th>
              <th>
                <p>Rol</p>
              </th>
              <th>
                <p></p>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <Fragment key={user.id}>
                <tr className="[&>td]:p-4 [&>td]:border-b [&>td]:border-slate-200">
                  <td>
                    <p className="font-semibold text-slate-700">
                      {user.username}
                    </p>
                  </td>

                  <td>
                    <p className="text-slate-500">{user.email}</p>
                  </td>

                  <td>
                    <p className="text-slate-500">{user.createdAt}</p>
                  </td>

                  <td>
                    <p className="text-slate-500">User</p>
                  </td>

                  <td className="space-x-5">
                    <button
                      className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                      onClick={() => deleteUser(user.id)}
                    >
                      <DeleteIcon />
                    </button>

                    <button
                      className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                      // onClick={() => deleteTask(task.id)}
                    >
                      <EditIcon />
                    </button>

                    <button
                      className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                      // onClick={() => deleteTask(task.id)}
                    >
                      <SearchIcon />
                    </button>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center w-full h-full p-10 text-slate-500">
          <p>No existen usuarios</p>
        </div>
      )}
    </div>
  );
};

export default Users;
