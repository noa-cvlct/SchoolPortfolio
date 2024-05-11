import {Project, Technology} from "@/types/data_types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description du projet 1",
    src: "/SchoolPortfolio/project1.png",
    alt: "project1",
  },
  {
    id: 2,
    title: "Hue Dada",
    description: "Création d'une application permettant de gérer les lumières par pièces dans une maison, connectées via ESP32 en Bluetooth BLE (couleurs, intensité, réactivité au bruit ambiant, etc...).",
    src: "/SchoolPortfolio/huedada.jpg",
    alt: "Hue Dada Application Content Image",
    source_url: "https://github.com/noa-cvlct/huedada",
  },
  {
    id: 3,
    title: "Transport Investigations Limited",
    description: "Développement d'un site web dynamique pour une compagnie ferroviaire britannique, intégrant un CMS et un système de paiement sécurisé pour le règlement des amendes.",
    src: "/SchoolPortfolio/til.png",
    alt: "TIL Website Content Image",
    preview_url: "https://transportinvestigations.co.uk/",
  },
  {
    id: 4,
    title: "Geo History",
    description: "Description du projet 4",
    src: "/SchoolPortfolio/geohistory.png",
    alt: "Geo History Website Content Image",
    preview_url: "https://www.geo-history.com/",
  },
];

export const technologies: Technology[] = [
  {
    id: 1,
    title: "Typescript",
    src: "/SchoolPortfolio/typescript.svg",
    alt: "Typescript Logo",
  },
  {
    id: 2,
    title: "Dart",
    src: "/SchoolPortfolio/dart.svg",
    alt: "Dart Logo",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    src: "/SchoolPortfolio/tailwindcss.svg",
    alt: "TailwindCSS Logo",
  },
  {
    id: 4,
    title: "Kotlin",
    src: "/SchoolPortfolio/kotlin.svg",
    alt: "Kotlin Logo",
  },
  {
    id: 5,
    title: "Java",
    src: "/SchoolPortfolio/java.svg",
    alt: "Java Logo",
  },
  {
    id: 6,
    title: "Flutter",
    src: "/SchoolPortfolio/flutter.svg",
    alt: "Flutter Logo",
  },
];