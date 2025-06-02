import DeleteIcon from "@/assets/svgs/Delete";
import EditIcon from "@/assets/svgs/Edit";
import SearchIcon from "@/assets/svgs/Search";
import { User } from "@/shared/types";

const CardUser = ({ user }: { user: User }) => {
  return (
    <div className="lg:hidden block">
      <div className="rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-10">
                <span className="flex size-full items-center justify-center rounded-full bg-slate-500 text-white uppercase">
                  {user.username.charAt(0) + user.username.charAt(1)}
                </span>
              </span>
              <div>
                <h3 className="font-semibold">{user.username}</h3>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-700">Activo</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span>Fecha:</span>
              <p className="font-medium">{user.creationDate}</p>
            </div>
            <div>
              <span>Rol:</span>
              <div className="mt-1">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors bg-slate-500 text-white text-xs">
                  Usuario
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-md border border-slate-200 px-3 py-1 hover:bg-slate-300/50 transition-colors cursor-pointer">
              <SearchIcon />
              Ver
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-md border border-slate-200 px-3 py-1 hover:bg-slate-300/50 transition-colors cursor-pointer">
              <EditIcon />
              Editar
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-md border border-slate-200 px-3 py-1 hover:bg-red-300/50 transition-colors cursor-pointer text-red-500">
              <DeleteIcon />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
