import DeleteIcon from "@/assets/svgs/Delete";
import EditIcon from "@/assets/svgs/Edit";
import InProgress from "@/assets/svgs/InProgress";
import SearchIcon from "@/assets/svgs/Search";
import { useTaskStore } from "@/stores/task-store";
import { Fragment } from "react";

interface TasksProps {
  isLoading: boolean;
}

const Tasks = ({ isLoading }: TasksProps) => {
  const { tasks, deleteTask } = useTaskStore();

  return (
    <div className="flex flex-col w-full h-full text-slate-700 bg-white shadow rounded-md">
      {!isLoading && (
        <div className="m-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Lista de Tareas
              </h3>

              <p className="text-slate-500">
                {tasks.length > 0
                  ? "Aquí puedes ver las tareas pendientes y sus estados"
                  : "Agrega tareas para que puedas visualizarlas"}
              </p>
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full p-10 text-slate-500">
          <p>Cargando tareas...</p>
        </div>
      ) : tasks.length > 0 ? (
        <table className="w-full text-left min-w-max">
          <thead>
            <tr className="bg-slate-50 text-slate-500 [&>th]:p-4 [&>th]:border-y [&>th]:border-slate-200 [&>th>p]:flex [&>th>p]:items-center [&>th>p]:justify-between [&>th>p]:gap-2 [&>th>p]:text-sm [&>th>p]:font-normal">
              <th>
                <p>Usuarios</p>
              </th>
              <th>
                <p>Tarea</p>
              </th>
              <th>
                <p>Estado</p>
              </th>
              <th>
                <p>Fecha de creación</p>
              </th>
              <th>
                <p>Fecha límite</p>
              </th>
              <th>
                <p>Descripción</p>
              </th>
              <th>
                <p></p>
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => {
              const traducirEstado = (status: string) => {
                switch (status) {
                  case "PENDING":
                    return "Pendiente";
                  case "IN_PROGRESS":
                    return "En Progreso";
                  case "COMPLETED":
                    return "Completado";
                  case "CANCELLED":
                    return "Cancelado";
                  default:
                    return status;
                }
              };

              return (
                <Fragment key={task.id}>
                  <tr className="[&>td]:p-4 border-b last:border-none border-slate-200">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <p className="font-semibold text-slate-700">
                            {task.user.username}
                          </p>
                          <p className="text-slate-500">{task.user.email}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <p className="text-slate-500">{task.title}</p>
                    </td>

                    <td>
                      <div className="w-max">
                        <div
                          className={`px-3 py-1 font-bold ${
                            task.status === "PENDING"
                              ? "text-yellow-900 bg-yellow-500/20"
                              : task.status === "IN_PROGRESS"
                              ? "text-blue-900 bg-blue-500/20"
                              : task.status === "COMPLETED"
                              ? "text-green-900 bg-green-500/20"
                              : task.status === "CANCELLED" &&
                                "text-red-900 bg-red-500/20"
                          } uppercase rounded-md text-sm`}
                        >
                          <span>{traducirEstado(task.status)}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <p className="text-slate-500">{task.dateCreated}</p>
                    </td>

                    <td>
                      <p className="text-slate-500">{task.deadline}</p>
                    </td>

                    <td>
                      <p className="text-slate-500 w-72 break-words">
                        {task.description}
                      </p>
                    </td>

                    <td className="space-x-5">
                      <button
                        className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                        onClick={() => deleteTask(task.id)}
                      >
                        <DeleteIcon />
                      </button>

                      <button
                        className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                        onClick={() => deleteTask(task.id)}
                      >
                        <EditIcon />
                      </button>

                      <button
                        className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                        onClick={() => deleteTask(task.id)}
                      >
                        <SearchIcon />
                      </button>

                      <button
                        className="rounded-md cursor-pointer hover:scale-125 transition-all duration-200"
                        onClick={() => deleteTask(task.id)}
                      >
                        <InProgress />
                      </button>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center w-full h-full p-10 text-slate-500">
          <p>No hay tareas disponibles</p>
        </div>
      )}
    </div>
  );
};

export default Tasks;
