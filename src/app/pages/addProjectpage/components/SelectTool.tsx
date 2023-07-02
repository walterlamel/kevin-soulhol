import { useEffect, useState } from "react";
import useGetTools, { outilType } from "../../../../hooks/useGetTools";

const SelectTool = ({
  changeSelectedTools,
  usedTools,
}: {
  changeSelectedTools: Function;
  usedTools: Array<outilType> | null;
}) => {
  const { outils } = useGetTools({});

  function isSelect(id: number) {
    if (usedTools) {
      let res = false;
      for (const t of usedTools) {
        if (t.id === id) {
          res = true;
        }
      }
      return res;
    } else {
      return false;
    }
  }

  return (
    <div className="container-select-tool">
      {outils.map((outil, key) => (
        <OneTool
          key={key}
          outil={outil}
          changeSelectedTools={changeSelectedTools}
          defaultSelect={isSelect(outil.id)}
        />
      ))}
    </div>
  );
};

export default SelectTool;

export const OneTool = ({
  outil,
  changeSelectedTools,
  defaultSelect,
}: {
  outil: outilType;
  changeSelectedTools: Function;
  defaultSelect: boolean;
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    setSelected(defaultSelect);
  }, [defaultSelect]);

  function handleClick() {
    if (!selected) {
      changeSelectedTools({ add: outil });
    } else {
      changeSelectedTools({ supp: outil });
    }

    setSelected((prev) => !prev);
  }

  return (
    <div
      className={"contain-tool" + (selected ? " select" : "")}
      onClick={handleClick}
    >
      <img
        src={
          import.meta.env.VITE_REACT_APP_API_USER +
          "/uploads/" +
          (outil?.icon ?? "")
        }
        alt={outil.name}
      />
    </div>
  );
};
