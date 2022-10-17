export const Phases = {
       1: { text: " ", choices: ["pro01", "account01", "idle01"] },
       2: {
              text: "Avec un ouija. Sinon, plus simplement, en cliquant ci-dessous :",
              choices: ["contact00", "retour01"],
       },
       200: {
              text: "Bienvenue à vous !",
              choices: ["mail01", "contact01", "retour01"],
       },
       201: {
              text: "Ah oui ! De ma part.<br/> Utilisez-les pour vous connecter puis allez sur votre profil. Vous trouverez ici les liens vers les projets qui vous concernent.",
              choices: ["connect01", "retour01"],
       },
       300: {
              text: "Voilà qui est fort agréable ! Connectez-vous donc !",
              choices: ["connect01", "works01", "contact02", "retour01"],
       },
       301: {
              text: "C'est bien simple ! Ils sont (ci-dessous)[#works] !",
              choices: ["works00", "games001", "retour01"],
       },
       302: {
              text: "Vers l'infini et au-delà !",
              choices: ["retour01"],
              action: "link",
              option: "#works",
       },
       303: {
              text: "Il m'arrive de m'entraîner à coder en faisant des petits jeux.",
              choices: ["games002", "retour01"],
              action: "games",
       },
       400: {
              text: "Parfait ! Ce site est aussi fait pour ça.",
              choices: ["works01", "contact01", "idle02", "retour01"],
       },
       401: {
              text: "Merci pour cette question ! Très bien et vous ?",
              choices: ["idle03", "idle04", "idle05"],
       },
       402: {
              text: "J'aime lire ça. Comment vous vous appelez ?",
              choices: ["ask_name", "retour01"],
       },
       403: {
              text: "Enchanté *$name*. Moi c'est Kévin du coup. Tu as un e-mail ?",
              choices: ["ask_email", "retour01"],
       },
       404: {
              text: "Merci beaucoup *$name* ! Je te contacterai aussi vite que possible !",
              choices: ["voir_works", "retour01"],
       },
       405: {
              text: "Ah bon ? Je ne peux pas trop aider d'ici. Je ne suis qu'un logiciel codé (je le rappelle).",
              choices: ["idle06"],
       },
       406: {
              text: "Mais peut-être que vous baladez sur mon site et y chercher les bidouilles cachées vous amusera",
              choices: ["idle07"],
       },
       407: {
              text: "Je sais bien, je sais bien ! Bonne visite à vous alors.",
              choices: ["take_gold", "retour01"],
       },
       408: {
              text: "Ah mince. Je ne vais pas pouvoir beaucoup aidé (je ne suis pas psy après tout), mais vous pouvez toujours me contacter ou vous baladez sur mon site",
              choices: ["idle07", "contact00", "retour01"],
       },
};

export const Messages = {
       retour01: { text: "Retour", accent: "light", to: 1 },
       pro01: { text: "Je suis un professionnel", to: 200 },
       mail01: { text: "J'ai reçu un e-mail avec des identifiants", to: 201 },
       connect01: {
              text: "Je me connecte",
              textconnect: "C'est bon ! Je le suis déjà",
              accent: "fort",
              to: "connect",
       },
       account01: { text: "J'ai un compte", to: 300 },
       idle01: { text: "Je me balade", accent: "fort", to: 400 },
       idle02: { text: "Comment allez-vous ?", to: 401 },
       idle03: { text: "Très bien !", to: 402 },
       idle04: { text: "Bof...", to: 405 },
       idle05: { text: "Pas très bien...", to: 408 },
       idle06: { text: "Moui c'est vrai...", to: 406 },
       idle07: { text: "Bonne idée !", to: 407 },
       works00: { text: "Y aller.", to: 302 },
       works01: { text: "Je veux voir vos travaux.", to: 301, accent: "fort" },
       games001: { text: "Je veux jouer à des jeux", to: 303, accent: "fort" },
       games002: { text: "Revoir les jeux", to: 303 },
       contact00: { text: "Contacter", accent: "fort", to: "contact" },
       contact01: { text: "Comment vous contacter ?", to: 2 },
       contact02: { text: "Je préfère vous contacter", to: "contact" },
       ask_name: {
              input: true,
              name: "name",
              to: 403,
       },
       ask_email: {
              input: true,
              name: "email",
              to: 404,
       },
       confirmform: {
              text: "Valider",
              accent: "fort",
              valid: true,
       },
       bof01: {
              text: "Bof...",
              to: 12,
       },
       bof02: {
              text: "Bof...",
              to: 13,
       },
       take_gold: {
              text: "Merci !",
              to: "take_gold",
       },
};
