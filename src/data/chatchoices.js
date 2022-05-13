export const Phases = {
       1: {
              text: " ",
              choices: ["client01", "compte01", "balade01"],
       },
       2: {
              text: "Enchanté et bienvenue =) Que cherchez-vous ?",
              choices: ["client03", "client02", "voir_works"],
       },
       3: {
              text: "Voilà qui est fort plaisant ! Dites-m'en plus...",
              choices: ["voir_works", "client05"],
       },
       4: {
              text: "Aucun problème ! C'est juste *(en-dessous)[#works]* !",
              choices: ["retour_depart"],
       },
       5: {
              text: "N'hésitez pas à me contacter via un de ces liens.",
              action: "contact",
              choices: ["contact01", "retour_depart"],
       },
       6: {
              text: "Voilà une bonne chose !",
              choices: ["contact01", "balade02", "retour_depart"],
       },
       7: {
              text: "On ne peut mieux ! Et vous ?",
              choices: ["oui01", "bof01", "mal01"],
       },
       8: {
              text: "J'aime lire ça. Comment vous vous appelez ?",
              choices: ["ask_name", "retour_depart"],
       },
       9: {
              text: "Enchanté *$name*. Moi c'est Kévin du coup. Je peux peut-être te joindre via un e-mail ?",
              choices: ["ask_email", "retour_depart"],
       },
       10: {
              text: "Merci beaucoup *$name* ! Je te contacterai aussi vite que possible !",
              choices: ["voir_works", "retour_depart"],
       },
       11: {
              text: "Ah ! On se connaît donc ! Connectez-vous avec les codes envoyés et vous serez redirigé au bon endroit.",
              choices: ["compte02", "retour_depart"],
       },
       12: {
              text: "Ah ? Est-ce que je peux faire quelque chose pour vous ?",
              choices: ["bof02", "retour_depart"],
       },
       13: {
              text: "Ca ne m'aide pas du tout. Peut-être que vous pouvez vous occupez en regardant mon site.",
              choices: ["bof04", "bof03", "retour_depart"],
       },
       14: {
              text: "Bonne visite !",
              choices: ["contact01", "voir_works", "retour_depart"],
       },
       15: {
              text: "Je vais avoir du mal à vous aider d'ici. Mais vous pouvez toujours m'écrire ou vous balader sur l'illustration ci-contre.",
              choices: ["contact01", "voir_works", "mal02", "retour_depart"],
       },
};

export const Messages = {
       client01: {
              text: "Je suis client",
              to: 2,
       },
       client02: {
              text: "Je veux travailler avec toi",
              to: 3,
       },
       client03: {
              text: "J'ai reçu un email avec des codes",
              accent: "fort",
              to: 11,
       },
       voir_works: {
              text: "Je veux voir un de tes travaux",
              to: 4,
       },
       client05: {
              text: "Je veux te contacter",
              accent: "fort",
              to: 5,
       },
       compte01: {
              text: "J'ai un compte",
              textconnect: "Je suis déjà connecté",
              to: "connect",
       },
       compte02: {
              text: "Je me connecte",
              textconnect: "C'est bon !",
              accent: "fort",
              to: "connect",
       },
       balade01: {
              text: "Je me balade",
              accent: "fort",
              to: 6,
       },
       balade02: {
              text: "Comment vas-tu ?",
              to: 7,
       },
       contact01: {
              text: "Me contacter",
              accent: "fort",
              to: "contact",
       },
       retour_depart: {
              text: "Retour",
              to: 1,
              accent: "light",
       },
       oui01: {
              text: "Parfait !",
              to: 8,
       },
       bof01: {
              text: "Bof...",
              to: 12,
       },
       bof02: {
              text: "Bof...",
              to: 13,
       },
       bof03: {
              text: "Moui je vais faire ça...",
              to: 6,
       },
       bof04: {
              text: "Bonne idée ! Je vais de suite mieux.",
              accent: "fort",
              to: 14,
       },
       mal01: {
              text: "Très mal !",
              to: 15,
       },
       mal02: {
              text: "Merci !",
              to: 8,
       },
       ask_name: {
              input: true,
              name: "name",
              to: 9,
       },
       ask_email: {
              input: true,
              name: "email",
              to: 10,
       },
       confirmform: {
              text: "Valider",
              accent: "fort",
              valid: true,
       },
};
