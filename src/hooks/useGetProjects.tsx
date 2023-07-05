import { useEffect, useState } from "react";
import { request } from "../services/requestApi";

import ProjectType from "../types/projectType";
import { paramsRequestType } from "../types/apiType";

const useGetProjects = ({
  params,
  refresh,
}: {
  params: paramsRequestType;
  refresh?: number;
}) => {
  const [list, setList] = useState<ProjectType[]>([]);

  useEffect(() => {
    get();
  }, [refresh]);

  async function get() {
    const res = await request("projects", "GET", params);
    console.log(res);
    if (res.res) {
      setList(res.data);
    } else {
      setList([]);
      //console.log(res);
    }
  }

  return { list };
};

export default useGetProjects;
