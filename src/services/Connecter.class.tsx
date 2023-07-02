export default class Connecter {
  action: string;
  path_ajax: string;

  constructor(action: string) {
    let name_file_ajax = "index.php";
    let dossier = "php";
    let reg = new RegExp("^http://localhost:3000/");

    this.action = action;

    if (reg.exec(document.URL)) {
      //en localhost
      this.path_ajax = `${
        import.meta.env.VITE_REACT_APP_URL_GET_PROJECTS_IMAGES
      }${name_file_ajax}`;
    } else {
      //sur le serveur
      this.path_ajax = `./${dossier}/${name_file_ajax}`;
    }
  }

  async connect_to_api(infos: any = false) {
    //Prépa du POST

    let dataSend = new FormData();
    dataSend.append(
      "token",
      btoa(`${import.meta.env.VITE_REACT_APP_SECRETAUTH}`)
    );
    dataSend.append("action", this.action);

    if (infos) {
      for (const key in infos) {
        if (Object.hasOwnProperty.call(infos, key)) {
          let value = infos[key];

          if (value && value.constructor && value.constructor === Array) {
            value = JSON.stringify(value);
          }

          dataSend.append(key, value);
        }
      }
    }

    const requestOptions = {
      method: "POST",
      //headers: { "Content-Type": "application/json" },
      body: dataSend,
    };

    return await fetch(this.path_ajax, requestOptions)
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          return res;
        },
        (err) => {
          console.log(err);
          return false;
        }
      );
  }
}
