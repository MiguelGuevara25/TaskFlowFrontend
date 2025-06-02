"use client";
import { useState } from "react";
import ArrowDown from "@/assets/svgs/ArrowDown";
import MenuBurger from "@/assets/svgs/MenuBurger";
import CloseMenu from "@/assets/svgs/CloseMenu";
import Link from "next/link";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [showTasksDropdown, setShowTasksDropdown] = useState(false);
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);

  const handleTasksDropdown = () => {
    setShowTasksDropdown(!showTasksDropdown);

    if (showUsersDropdown) {
      setShowUsersDropdown(false);
    }
  };

  const handleUsersDropdown = () => {
    setShowUsersDropdown(!showUsersDropdown);

    if (showTasksDropdown) {
      setShowTasksDropdown(false);
    }
  };

  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);
    setShowTasksDropdown(false);
    setShowUsersDropdown(false);
  };

  return (
    <div className="lg:hidden flex flex-col lg:items-center lg:justify-between lg:flex-row text-gray-700 bg-white border-b border-gray-500 dark:text-gray-200 dark:bg-gray-800">
      <div className="flex flex-row items-center justify-between px-8 py-4">
        <h1 className="text-3xl dark:text-white">
          <Link href="/">
            Task<span className="font-bold text-indigo-600">Flow</span>
          </Link>
        </h1>

        <button
          className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline"
          onClick={handleOpenNavbar}
        >
          {openNavbar ? <CloseMenu /> : <MenuBurger />}
        </button>
      </div>

      <nav
        className={`flex-col flex-grow py-4 ${
          openNavbar ? "flex" : "hidden"
        } lg:flex lg:justify-end lg:flex-row`}
      >
        {/*<Link
          href="#"
          className="px-4 py-2 mt-2 rounded-lg lg:ml-4 lg:mt-0 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200"
        >
          Contact
        </Link>*/}

        <div className="relative">
          <button
            onClick={handleTasksDropdown}
            className="flex flex-row items-center w-full px-8 py-4 rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200"
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
            <div className="absolute right-0 w-full origin-top-right rounded-md shadow-lg lg:w-48 z-50">
              <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                <Link
                  href="/tasks"
                  className="block px-10 py-2 rounded-lg hover:bg-gray-600 dark:text-gray-200"
                  onClick={() => setOpenNavbar(false)}
                >
                  Ver Tareas
                </Link>
                <Link
                  href="/tasks/add"
                  className="block px-10 py-2 rounded-lg hover:bg-gray-600 dark:text-gray-200"
                  onClick={() => setOpenNavbar(false)}
                >
                  Añadir Tareas
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={handleUsersDropdown}
            className="flex flex-row items-center w-full px-8 py-4 rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200"
          >
            <span>Usuarios</span>
            <ArrowDown
              className={
                showUsersDropdown
                  ? "rotate-180 transition-transform"
                  : "transition-transform"
              }
            />
          </button>

          {showUsersDropdown && (
            <div className="absolute right-0 w-full origin-top-right rounded-md shadow-lg lg:w-48 z-50">
              <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                <Link
                  href="/users"
                  className="block px-10 py-2 rounded-lg hover:bg-gray-600 dark:text-gray-200"
                  onClick={() => setOpenNavbar(false)}
                >
                  Ver Usuarios
                </Link>
                <Link
                  href="/users/add"
                  className="block px-10 py-2 rounded-lg hover:bg-gray-600 dark:text-gray-200"
                  onClick={() => setOpenNavbar(false)}
                >
                  Añadir Usuarios
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
