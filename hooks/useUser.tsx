import { User } from "@/types/users";
import { useEffect, useState } from "react";

export default function useUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [fetchUserLoading, setFetchUserLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setFetchUserLoading(true);
      try {
        const response = await fetch("/data/users.json");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setFetchUserLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, fetchUserLoading };
  
}
