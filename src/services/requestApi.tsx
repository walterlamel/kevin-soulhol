import { isUndefined } from "util";

export interface requestReponseType{
       res: boolean;
       data: JSON | Array<any>;
       message: string;
       error?: any;
   }
   
export interface paramsRequestType{
       title?:string;
       date?:string;
       type?:string;
       short_desc?:string;
       desc?:string;
       link?:string;
       repertory?:string;
       in_homepage?:boolean;
       is_brouillon?:boolean;
       coverimage?: Blob;
       images?: Blob[];
       [key:string] : any;
       //recherche de projet
       filter?: {
              asc?: "asc" | "desc";
              orderBy?: string;
              type?: string;
              in_homepage?:boolean;
              is_brouillon?:boolean;
       } | string;
       //user
       nom?: string;
       prenom?: string;
       email?: string;
       password?: string;
       confirm_mdp?: string;
}


   
   export async function request<requestReponseType>(item:string, method:string, params:paramsRequestType) {
   
          let url = process.env.REACT_APP_API_USER + item;
          
          const data = new FormData();

          if(params.filter && typeof params.filter !== "string"){
              params.filter = JSON.stringify(params.filter)
          }

       

          if (params) {

                 if(!params.coverimage?.size){
                     delete params.coverimage;
                 }

                 url = url + "?";
                 Object.keys(params).forEach((key:string) => {
                        url = url + "&" + key + "=" + params[key as keyof paramsRequestType];
                 });

                 
                 
                 Object.keys(params).forEach((key:string) => {
                     data.append(key, params[key as keyof paramsRequestType]);
                 })
                 
          }
          

          //console.log(url)
          let addoptions = {}
          
          if(method !== "GET"){
              addoptions = {body : data}
          }

   
          return await fetch(url, {
                 method: method,
                 credentials: "include",
                 ...addoptions
          })
                 .then((res) => { 
                     //console.log(res); 
                     return res.json() 
                     })
                 .then(
                        (data) => {
                               //console.log(data)
                               return{
                                      res: true,
                                      data: data,
                                      message: "success"
                               };
                        },
                        (err) => {
                               console.log(err);
                               return {
                                      res: false,
                                      data: false,
                                      message : err.message,
                                      error: err
                               };
                        },
                 );
   }
   