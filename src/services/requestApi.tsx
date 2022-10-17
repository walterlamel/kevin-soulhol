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
       filter?: {
              asc?: "asc" | "desc";
              orderBy?: string;
              type?: string;
              in_homepage?:boolean;
              is_brouillon?:boolean;
       } | string;
   }
   
   export async function request<requestReponseType>(item:string, method:string, params:paramsRequestType) {
   
          let url = process.env.REACT_APP_API_USER + item;

          if(params.filter && typeof params.filter !== "string"){
              params.filter = JSON.stringify(params.filter)
          }

          if (params) {
                 url = url + "?";
                 Object.keys(params).forEach((key:string) => {
                        url = url + "&" + key + "=" + params[key as keyof paramsRequestType];
                 });    
          }

          //console.log(url)
          let addoptions = {}
          
          if(method !== "GET"){
              
              addoptions = {body : JSON.stringify(params)}
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
   