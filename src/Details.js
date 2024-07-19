// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import node from "./assets/techstack/node.png";
import express from "./assets/techstack/express.png";
import mongo from "./assets/techstack/mongo.png";
import mongoose from "./assets/techstack/mongoose.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ibrahima BAH",
  tagline: "Développeur web  junior",
  img: profile,
    about: `Titulaire d'une matrise de sciences de l'environnement, j'ai découvert l'informatique lors de ma formation scientifique et ai tout de suite accroché. J'ai par la suite
  décidé de me réorienter vers le développement web par le biais de l'offre de formation dîplomante d'OpenClassrooms afin de pouvoir exercer un métier qui me passionne.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ibrahima-bah-a20336212/",
  github: "https://github.com/ibrasunu/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Agent de service Hospitalier",
    Company: `Groupe Clinipôle`,
    Location: "Montpellier",
    Type: "CDI",
    Duration: "Août 2015 - Dec 2022",
  },
  {
    Position: "Contrôleur qualité des eaux",
    Company: `Environnement Clean Services`,
    Location: "Nîmes",
    Type: "CDD",
    Duration: "Jul 2013 - Jul 2015",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Développeur web",
    Company: "OpenClassrooms",
    Location: "À distance",
    Type: "Titre professionnel niveau III",
    Duration: "Fev 2023 - Jan 2024",
  },
  {
    Position: "Maîtrise Sciences de l'Environnement",
    Company: `Aix-Marseille Université`,
    Location: "Marseille/Toulon",
    Type: "Bac+4 université",
    Duration: "Sep 2011 - Juin 2012",
  },
  
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  tailwind: tailwind,
  node: node,
  express: express,
  mongo: mongo,
  mongoose: mongoose,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Mon vieux grimoire",
    image: projectImage1,
    description: `Développer le back-end d'un site de notation de livres`,
    techstack: "NODEJS, EXPRESS, MONGODB",
    contexte :"La chaîne de librairies souhaite ouvrir un site de notation de livres qui permettra aux membres d'ajouter un nouveau livre et de mettre une note visible par le public. J'ai été chargé de développer la partie back end du site en Node.js.",
    problematique:"Dans ce projet, il a fallu suivre le cahier des charges fourni. J'ai commencé par créer le serveur et le routeur grâce au framework Express et paramétrer la base de données MongoDB grâce à la bibliothèque Mongoose. J'ai créé différents middlewares pour l'authentification, la gestion des requêtes multipart et pour le retraitement des images (green code). Enfin grâce aux méthodes HTTP, j'ai créé différents controleurs pour manipuler la base de données.",
    previewLink: "https://google.com",
    githubLink: "https://github.com/ibrasunu/OcP7_mon_vieux_grimoire",
  },
  {
    title: "Kasa",
    image: projectImage2,
    description: `Créer une application web de location immobilière avec React`,
    techstack: " HTML/CSS, SASS, REACTJS ",
    contexte :"Je suis recruté par Kasa, leader de la location d'appartements entre particuliers, en tant que freelance pour développer sa nouvelle platforme web. Le site a été codé il y a plus de 10 ans en ASP.NET et j'ai été chargé de recoder le site en React.",
    problematique:"Dans ce projet, il a fallu partir de la maquette fournie et coder depuis zéro le front-end avec React et React Router Dom. Parmi les défis à relever : créer différentes routes dans le routeur, créer des boites de texte ouvrables et fermables, créer un carroussel cyclique et enfin rediriger vers une page d'erreur en cas d'erreur d'URL. Tout le site devait être responsive.",
    previewLink: "https://ibrasunu.github.io/Projet6-kasa/",
    githubLink: "https://github.com/ibrasunu/Projet6-kasa",
  },
  {
    title: "Nina Carducci",
    image: projectImage3,
    description: `Débugger et optimiser un site de photographe`,
    techstack: "HTML/CSS, JavaScript",
    contexte :"Nina Carducci possède un portfolio comprenant beaucoup d'images. Son site n'est pas bien optimisé et quelques bugs sont présents. Après audit, je lui propose d'optimiser les images, le code et sa structure de son site et de corriger les bugs.",
    problematique:"Dans ce projet, il a fallu faire un audit LightHouse avant/après pour voir d'où venaient les soucis d'optimisation. J'ai donc travaillé sur l'optimisation des images (taille, format, etc), sur la minification des fichiers JS et CSS et sur l'optimisation SEO (notamment des rich snippets). Il a également fallu travailler sur l'accessibilité en réorganisant le code et en respectant les règles de la WCAG. J'ai enfin corrigé les bugs présents dans le code Javascript.",
    previewLink: " https://ibrasunu.github.io/Projet5-Nina-Carducci/",
    githubLink: "https://github.com/ibrasunu/Projet5-Nina-Carducci",
  },
  {
    title: "Menu Maker By Qwenta",
    image: projectImage4,
    description: `Planifier le développement du site de votre client`,
    techstack: " SEO,Trello, Outils de veilles",
    contexte :"Notre client Qwenta souhaite faire développer un 'Menu Maker', site permettant aux restaurateurs d'afficher et de mettre en page leurs menus facilement. J'ai été chargé de préparer et planifier le projet.",
    problematique:"Dans ce projet en AGILE, il a fallu commencer par développer un système de veille qui pourrait être réutilisé par l'équipe. Dans un second temps, il a fallu remplir les spécifications techniques du projet en justifiant mes choix. Enfin, j'ai dû faire la planification du projet via Trello à travers des KANBAN et un diagramme de GANTT et présenter tout cela au client.",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Sophie Bluel",
    image: projectImage5,
    description: `Créer une page web dynamique avec JavaScript`,
    techstack: "HTML/CSS, JavaScript",
    contexte :"Notre cliente, Sophie Bluel, souhaite que nous lui développions un portfolio avec ses différents projets d'architecte. J'ai été chargé de développer la partie front-end en Javascript.",
    problematique:"Dans ce projet, il a fallu que je développe les fonctions de la page de présentation, la page de connexion de l'administrateur du site et la modale permettant d'uploader de nouveaux médias. Il a fallu faire en sorte que le site se mette à jour sans qu'il n'y ait de rafraichissement de la page en manipulant le DOM.",
    previewLink: "https://google.com",
    githubLink: "https://github.com/ibrasunu/OcProject3_Sophie",
  },
  {
    title: "Booki",
    image: projectImage6,
    description: `Créer la page d'accueil d'une agence de voyage avec HTML & CSS`,
    techstack: "HTML/CSS",
    contexte :"L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site avec du code HTML et CSS.",
    problematique:"Dans ce projet il a fallu respecter les spécifications et contraintes techniques regroupées dans la note de synthèse qui nous était fournie ainsi que la maquette. Il a fallu notamment que les cartes 'hébergement' soit cliquables dans leur entièreté, le site devait être responsive avec 3 breakpoints donnés et le code devait être passé aux validateurs W3C.",
    previewLink: "https://ibrasunu.github.io/OcSecondProject/",
    githubLink: "https://github.com/ibrasunu/OcSecondProject",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ibrasunu@gmail.com",
  phone: "+33 6 51 24 62 81",
};