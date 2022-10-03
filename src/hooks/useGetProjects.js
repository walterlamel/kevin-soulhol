import { useEffect, useState } from "react";
import { request } from "../services/requestApi";

const useGetProjects = ({ params, refresh }) => {
       const [list, setList] = useState([]);

       useEffect(() => {
              get();
       }, [refresh]);

       async function get() {
              const res = await request("projects", "GET", params);
              
              if (res.res) {
                     setList(res.data);
              } else {
                     setList([]);
                     console.log(res);
              }
       }

       return { list };
};

export default useGetProjects;
