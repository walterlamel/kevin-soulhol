import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../app/pages/slices/userSlice";

export const useIsAdmin = () => {
  const user = useSelector(selectUser);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user.roles === "ADMIN") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return { isAdmin };
};

export default useIsAdmin;
