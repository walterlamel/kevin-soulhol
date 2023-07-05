export interface requestReponseType {
  res: boolean;
  data: JSON | Array<any>;
  message: string;
  error?: any;
}

export interface paramsRequestType {
  title?: string;
  date?: string;
  type?: string;
  short_desc?: string;
  desc?: string;
  link?: string;
  repertory?: string;
  in_homepage?: boolean;
  is_brouillon?: boolean;
  coverimage?: Blob;
  images?: Blob[];
  [key: string]: any;
  //recherche de projet
  filter?:
    | {
        asc?: "asc" | "desc";
        orderBy?: string;
        type?: string;
        in_homepage?: boolean;
        is_brouillon?: boolean;
        outils?: number | false;
        with_project?: boolean;
      }
    | string;
  //user
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
  confirm_mdp?: string;
}
