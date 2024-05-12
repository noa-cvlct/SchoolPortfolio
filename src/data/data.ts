import {Project, Technology} from "@/types/data_types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Hue Dada",
    description: "Création d'une application permettant de gérer les lumières par pièces dans une maison, connectées via ESP32 en Bluetooth BLE (couleurs, intensité, réactivité au bruit ambiant, etc...).",
    src: "/huedada.jpg",
    alt: "Hue Dada Application Content Image",
    source_url: "https://github.com/noa-cvlct/huedada",
  },
  {
    id: 2,
    title: "Site gestion de BUT",
    description: "Conception et développement d'un site de gestion de Bachelors Universitaires de Technologie à l’aide de Django : gestion d'utilisateur, gestion de données relatives à un système scolaire BUT (compétences, notes, etc...).",
    src: "/gestionbut.png",
    alt: "Site Gestion de BUT Website Content Image",
  },
  {
    id: 3,
    title: "Transport Investigations Limited",
    description: "Développement d'un site web dynamique pour une compagnie ferroviaire britannique, intégrant un CMS et un système de paiement sécurisé pour le règlement des amendes.",
    src: "/til.png",
    alt: "TIL Website Content Image",
    preview_url: "https://transportinvestigations.co.uk/",
  },
  {
    id: 4,
    title: "Geo History",
    description: "Développement d'une application web pour un Youtuber spécialisé dans l'histoire, avec des mini-jeux, et des vidéos sur des thèmes historiques variés.",
    src: "/geohistory.png",
    alt: "Geo History Website Content Image",
    preview_url: "https://www.geo-history.com/",
  },
];

export const technologies: Technology[] = [
  {
    id: 1,
    title: "Typescript",
    src: "/typescript.svg",
    alt: "Typescript Logo",
  },
  {
    id: 2,
    title: "Dart",
    src: "/dart.svg",
    alt: "Dart Logo",
  },
  {
    id: 4,
    title: "Kotlin",
    src: "/kotlin.svg",
    alt: "Kotlin Logo",
  },
  {
    id: 5,
    title: "Java",
    src: "/java.svg",
    alt: "Java Logo",
  },
  {
    id: 13,
    title: "C++",
    src: "/cplusplus.svg",
    alt: "C++ Logo",
  },
  {
    id: 6,
    title: "Python",
    src: "/python.svg",
    alt: "Python Logo",
  },
  {
    id: 12,
    title: "Next.js",
    src: "/nextjs.svg",
    alt: "Next.js Logo",
  },
  {
    id: 7,
    title: "Flutter",
    src: "/flutter.svg",
    alt: "Flutter Logo",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    src: "/tailwindcss.svg",
    alt: "TailwindCSS Logo",
  },
  {
    id: 8,
    title: "Firebase",
    src: "/firebase.svg",
    alt: "Firebase Logo",
  },
  {
    id: 10,
    title: "Django",
    src: "/django.svg",
    alt: "Django Logo",
  },
  {
    id: 11,
    title: "Figma",
    src: "/figma.svg",
    alt: "Figma Logo",
  },
  {
    id: 9,
    title: "Git",
    src: "/git.svg",
    alt: "Git Logo",
  },
];