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
  tagline: "Développeur web ",
  img: profile,
  about: `Titulaire d'une maitrise de sciences de l'environnement, j'ai découvert l'informatique lors de ma formation scientifique et ai tout de suite accroché. J'ai par la suite
  décidé de me réorienter vers le développement web par le biais de l'offre de formation dîplomante d'OpenClassrooms afin de pouvoir exercer un métier qui me passionne.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://github.com/ibrasunu/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
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
    Duration: "Fev 2023 - Dec 2023",
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
    description: `Développez le back-end d'un site de notation de livres`,
    techstack: "NODEJS, EXPRESS, MONGODB",
    previewLink: "https://google.com",
    githubLink: "https://github.com/ibrasunu/OcP7_mon_",
  },
  {
    title: "Kasa",
    image: projectImage2,
    description: `Créez une application web de location immobilière avec React`,
    techstack: " HTML/CSS, SASS, REACTJS,  ",
    previewLink: "https://google.com",
    githubLink: "https://github.com/ibrasunu/Projet6-kasa",
  },
  {
    title: "Nina Carducci",
    image: projectImage3,
    description: `Débuggez et optimisez un site de photographe`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: " https://ibrasunu.github.io/Projet5-Nina-Carducci/",
    githubLink: "https://github.com/ibrasunu/Projet5-Nina-Carducci",
  },
  {
    title: "Menu Maker By Qwenta",
    image: projectImage4,
    description: `Planifiez le développement du site de votre client`,
    techstack: " SEO,Trello, Outils de veilles",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Sophie Bluel",
    image: projectImage5,
    description: `Créez une page web dynamique avec JavaScript`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/ibrasunu/OcProject3_Sophie",
  },
  {
    title: "Booki",
    image: projectImage6,
    description: `Créez la page d'accueil d'une agence de voyage avec HTML & CSS`,
    techstack: "HTML/CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/ibrasunu/OcSecondProject",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ibrasunu@gmail.com",
  phone: "+33 6 51 24 62 81",
};