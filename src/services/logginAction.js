export function* loggin(identifiant, password) {
       fetch(process.env.REACT_APP_API_USER + "login", {
              method: "POST",
              headers: {
                     "Content-Type": "application/json",
              },
              body: JSON.stringify({
                     email: identifiant,
                     password: password,
              }),
       })
              .then((res) => res.json())
              .then(
                     (data) => {
                            console.log(data);
                     },
                     (err) => {
                            console.log(err);
                     },
              );
}
