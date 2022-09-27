export default class Connecter {
       constructor(action) {
              let name_file_ajax = "index.php";
              let dossier = "php";
              let reg = new RegExp("^http://localhost:3000/");

              this.action = action;

              if (reg.exec(document.URL)) {
                     //en localhost
                     this.path_ajax = `https://kevin-soulhol/${dossier}/${name_file_ajax}`;
              } else {
                     //sur le serveur
                     this.path_ajax = `./${dossier}/${name_file_ajax}`;
              }
       }

       async connect_to_api(infos = false) {
              return new Promise((r, f) => {
                     //Prépa du POST

                     let dataSend = new FormData();
                     dataSend.append(
                            "token",
                            btoa(`${process.env.REACT_APP_SECRETAUTH}`),
                     );
                     dataSend.append("action", this.action);

                     if (infos) {
                            for (const key in infos) {
                                   if (Object.hasOwnProperty.call(infos, key)) {
                                          let value = infos[key];

                                          if (
                                                 value &&
                                                 value.constructor &&
                                                 value.constructor === Array
                                          ) {
                                                 value = JSON.stringify(value);
                                          }

                                          dataSend.append(key, value);
                                   }
                            }
                     }

                     const requestOptions = {
                            method: "POST",
                            url: this.path_ajax,
                            headers: { "Content-Type": "application/json" },
                            body: dataSend,
                            withCredentials: true,
                     };

                     fetch(this.path_ajax, requestOptions)
                            .then((res) => res.json())
                            .then(
                                   (res) => {
                                          console.log(res);
                                   },
                                   (err) => {
                                          console.log(err);
                                   },
                            );

                     //lancement axios
                     /*
                     axios({
                            method: "post",
                            url: this.path_ajax,
                            data: dataSend,
                            headers: { "Content-Type": "application/json" },
                            withCredentials: true,
                     })
                            .then((res) => {
                                   console.log(res);
                                   r(res.data);
                            })
                            .catch((err) => {
                                   console.log(err);
                                   f(err);
                            });
                            */
              });
       }
}
