import { useEffect, useState } from "react";
import { request } from "../services/requestApi";

const useGetUsers = ({ params, refresh }) => {
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
