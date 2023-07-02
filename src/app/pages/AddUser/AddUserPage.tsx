import Form, { InputType } from "../../components/forms/Form";

const inputs: InputType[] = [
  {
    name: "nom",
    label: "Nom",
    type: "text",
  },
  {
    name: "prenom",
    label: "Prénom",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Mot de passe",
    type: "password",
  },
  {
    name: "confirm_mdp",
    label: "Confirmez le mot de passe",
    type: "password",
  },
];

const datatoSend = {
  nom: "string",
  prenom: "string",
  email: "string",
  password: "string",
  confirm_pass: "string",
};

const AddUserPage = () => {
  return (
    <div className="pageFormAdd otherpage">
      <h2>
        Ajouter un <span className="accent">utilisateur</span>
      </h2>
      <Form
        inputs={inputs}
        link_request="users/"
        method="post"
        typeDataToSend={datatoSend}
        textSubmit="Ajouter"
      />
    </div>
  );
};

export default AddUserPage;
