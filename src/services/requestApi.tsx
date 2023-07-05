import { paramsRequestType } from "../types/apiType";

export async function request<requestReponseType>(
  item: string,
  method: string,
  params: paramsRequestType
) {
  let url = import.meta.env.VITE_REACT_APP_API_USER + "/" + item;

  const data = new FormData();

  if (params.filter && typeof params.filter !== "string") {
    params.filter = JSON.stringify(params.filter);
  }

  if (params.outils && typeof params.outils !== "string") {
    params.outils.map((o: any, k: number) => {
      params.outils[k] = JSON.stringify(o);
    });
  }

  //console.log(params)

  if (params) {
    if (!params.coverimage?.size) {
      delete params.coverimage;
    }

    if (method === "GET") {
      url = url + "?";
      Object.keys(params).forEach((key: string) => {
        url = url + "&" + key + "=" + params[key as keyof paramsRequestType];
      });
    }

    Object.keys(params).forEach((key: string) => {
      if (Array.isArray(params[key as keyof paramsRequestType])) {
        for (
          var i = 0;
          i < params[key as keyof paramsRequestType].length;
          i++
        ) {
          data.append(key + "[]", params[key as keyof paramsRequestType][i]);
        }
      } else {
        data.append(key, params[key as keyof paramsRequestType]);
      }
    });
  }

  //console.log(url)
  let addoptions = {};

  if (method !== "GET") {
    addoptions = { body: data };
  }

  //console.log(addoptions)

  return await fetch(url, {
    method: method,
    credentials: "include",
    ...addoptions,
  })
    .then((res) => {
      //console.log(res);
      return res.json();
    })
    .then(
      (data) => {
        //console.log(data)
        return {
          res: true,
          data: data,
          message: "success",
        };
      },
      (err) => {
        console.log(err);
        return {
          res: false,
          data: false,
          message: err.message,
          error: err,
        };
      }
    );
}
