"use client";
import Users from "@/components/Users";
import { useUserStore } from "@/stores/user-store";
import { useEffect, useState } from "react";

const UserPage = () => {
  const { getUsers } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      await getUsers();
      setIsLoading(false);
    };
    fetchTasks();
  }, [getUsers]);

  return (
    <div className="w-[85%] mx-auto pt-20">
      <section className="flex items-center justify-center gap-20">
        <Users isLoading={isLoading} />
      </section>
    </div>
  );
};

export default UserPage;
