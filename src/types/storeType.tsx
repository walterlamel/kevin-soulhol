export interface IInitial {
  session: IStateSession;
}

interface IStateSession {
  user?: IUser;
  loading: boolean;
  messageLogin: string | false;
  isConnect: boolean;
}

interface IUser {
  roles?: string;
  prenom?: string;
  nom?: string;
  email?: string;
}
