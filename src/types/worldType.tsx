export interface IWorldElement {
  id: string;
  name: string;
  img: string;
  position: IPosition;
  action: IAction;
}

interface IAction {
  name: "talk";
  details: string;
}

interface IPosition {
  right?: string;
  top?: string;
  left?: string;
  height?: string;
  width?: string;
}
