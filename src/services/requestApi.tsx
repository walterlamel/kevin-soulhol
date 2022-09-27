interface requestReponseType{
       res: boolean;
       message: string;
       error?: any;
       data?: JSON | Array<any>;
   }
   
   interface paramsRequestType{
          in_homepage?:boolean;
          is_brouillon?:boolean;
   }
   
   export async function request<requestReponseType>(item:string, method:string, params:paramsRequestType) {
   
          let url = process.env.REACT_APP_API_USER + item;
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
                 .then((res) => res.json())
                 .then(
                        (data) => {
                               
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
                                      message : err.message,
                                      error: err
                               };
                        },
                 );
   }
   