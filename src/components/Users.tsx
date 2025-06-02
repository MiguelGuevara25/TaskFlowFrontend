import { Toaster } from "sonner";
import { Fragment } from "react";
import { useUserStore } from "@/stores/user-store";
import DeleteIcon from "@/assets/svgs/Delete";
import EditIcon from "@/assets/svgs/Edit";
import SearchIcon from "@/assets/svgs/Search";
import UsersIcon from "@/assets/svgs/UsersIcon";
import CardUser from "./CardUser";

const Users = ({ isLoading }: { isLoading: boolean }) => {
  const { users, deleteUser } = useUserStore();

  return (
    <div className="flex flex-col w-full h-full text-slate-700 bg-white shadow rounded-md">
      <Toaster position="top-center" richColors />
      {!isLoading && (
        <div className="m-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <UsersIcon />
                Usuarios
              </h3>

              <p className="text-slate-500 text-sm lg:text-base">
                {users.length > 0
                  ? "Gestiona los usuarios registrados en el sistema"
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
        <Fragment>
          <table className="w-full hidden lg:table">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-500 text-left [&>th]:p-4 [&>th]:text-sm [&>th]:font-normal [&>th]:border-y [&>th]:border-slate-200">
                <th>Usuario</th>
                <th>Correo</th>
                <th>Fecha</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-200 hover:bg-slate-300/50 transition-colors [&>td]:p-4 text-sm last:border-none"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full size-8">
                        <span className="flex size-full items-center justify-center rounded-full bg-slate-500 text-white uppercase">
                          {user.username.charAt(0) + user.username.charAt(1)}
                        </span>
                      </span>
                      <span className="font-medium">{user.username}</span>
                    </div>
                  </td>
                  <td className="text-slate-500">{user.email}</td>
                  <td className="text-slate-500">{user.creationDate}</td>
                  <td>
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors bg-slate-500 text-white text-xs">
                      Usuario
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div
                        className={`size-2 rounded-full ${
                          user.active ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      <span
                        className={`text-sm ${
                          user.active ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {user.active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="space-x-5">
                      <button className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200">
                        <SearchIcon />
                      </button>

                      <button className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200">
                        <EditIcon />
                      </button>

                      <button
                        className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                        onClick={() => deleteUser(user.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.map((user) => (
            <CardUser key={user.id} user={user} />
          ))}
        </Fragment>
      ) : (
        <div className="flex items-center justify-center w-full h-full p-10 text-slate-500">
          <p>No existen usuarios</p>
        </div>
      )}
    </div>
  );
};

export default Users;
