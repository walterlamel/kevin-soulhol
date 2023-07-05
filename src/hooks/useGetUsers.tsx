import { useEffect, useState } from "react";
import { request } from "../services/requestApi";
import { paramsRequestType } from "../types/apiType";

const useGetUsers = ({
  params,
  refresh,
}: {
  params: paramsRequestType;
  refresh: number;
}) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    get();
  }, [refresh]);

  async function get() {
    const res = await request("users", "GET", params);
    if (res.res) {
      setListUsers(res.data);
    } else {
      setListUsers([]);
    }
  }

  return { listUsers };
};

export default useGetUsers;
