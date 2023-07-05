export interface IPhases {
  [key: number]: IPhase;
}

interface IPhase {
  text: string;
  choices: string[];
  action?: IAction;
  option?: IOption;
}

export type IOption = "#works";
export type IAction =
  | "link"
  | "games"
  | "take_gold"
  | "connect"
  | "works"
  | "contact";

export interface IMessages {
  [key: string]: IMessage;
}

export interface IMessage {
  text?: string;
  textconnect?: string;
  accent?: string;
  to?: ITo;
  input?: boolean;
  name?: string;
  valid?: boolean;
}

export type ITo = number | "connect" | "works" | "contact" | "take_gold";
