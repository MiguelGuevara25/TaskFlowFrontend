"use client";
import { useState } from "react";
import ArrowDown from "@/assets/svgs/ArrowDown";
import Link from "next/link";

const Aside = () => {
  const [showTasksDropdown, setShowTasksDropdown] = useState(false);
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);

  return (
    <aside className="py-5 px-10 flex flex-col gap-8 w-[15%] border-r border-gray-500 dark:bg-gray-800">
      <div>
        <h1 className="text-3xl dark:text-white">
          <Link href="/">Task<span className="font-bold text-indigo-600">Flow</span></Link>
        </h1>
      </div>

      <div className="dark:text-white">
        <p>Administra tus tareas</p>
      </div>

      <nav>
        <ul className="flex flex-col gap-5">
          <li>
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition-colors font-bold dark:text-white"
              onClick={() => setShowTasksDropdown(!showTasksDropdown)}
            >
              <span>Tareas</span>
              <ArrowDown
                className={
                  showTasksDropdown
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>

            {showTasksDropdown && (
              <ul className="ml-6 mt-2 flex flex-col gap-2">
                <li className="hover:text-indigo-600 transition-colors dark:text-white">
                  <Link href="/tasks">Ver Tareas</Link>
                </li>
                <li className="hover:text-indigo-600 transition-colors dark:text-white">
                  <Link href="/tasks/add">Añadir Tareas</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition-colors font-bold dark:text-white"
              onClick={() => setShowUsersDropdown(!showUsersDropdown)}
            >
              <span>Usuarios</span>
              <ArrowDown
                className={
                  showUsersDropdown
                    ? "rotate-180 transition-all"
                    : "transition-all"
                }
              />
            </button>

            {showUsersDropdown && (
              <ul className="ml-6 mt-2 flex flex-col gap-2">
                <li className="hover:text-indigo-600 transition-colors dark:text-white">
                  <Link href="/users">Ver Usuarios</Link>
                </li>
                <li className="hover:text-indigo-600 transition-colors dark:text-white">
                  <Link href="/users/add">Añadir Usuarios</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
