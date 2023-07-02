import { useEffect, useState } from "react";
import { request } from "../services/requestApi";

export type outilType = {
  id: number;
  name: string;
  icon?: string;
  desc?: string;
};

const useGetTools = ({
  filter = {
    with_project: false,
  },
}: any) => {
  const [outils, setOutil] = useState<Array<outilType>>([]);

  useEffect(() => {
    async function getTools() {
      const tools = await request("outils", "GET", { filter: filter });

      if (tools.res) {
        setOutil(tools.data);
      } else {
        setOutil([]);
      }
    }

    getTools();
  }, []);

  return { outils };
};

export default useGetTools;
