import Image from "next/image";
import Card from "@/components/cards/card";
import {Project} from "@/types/data_types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({project}: Readonly<ProjectCardProps>) {
  return (
    <Card className={"h-tile flex flex-row sm:flex-col md:block"}>
      <Image
        src={"/SchoolPortfolio" + project.src}
        alt={project.alt}
        width={1920}
        height={1080}
        className={"w-1/2 sm:w-full md:h-2/5 bg-gray-100 shadow-inner object-scale-down rounded-l-lg rounded-r-none sm:rounded-t-lg sm:rounded-b-none"}
      />
      <div className={"p-4 md:p-8 w-1/2 sm:w-full md:h-3/5 flex flex-col justify-between"}>
        <div className={"overflow-y-auto"}>
          <p className={"text-4xl"}>{project.title}</p>
          <p className={"mt-2 text-2xl text-gray-500"}>{project.description}</p>
        </div>
        <div className={"flex justify-between"}>
          {project.preview_url ? (
            <Link
              href={project.preview_url}
              target={"_blank"}
              className={"bg-blue-500 text-2xl text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors"}
            >
              Live Preview
            </Link>
          ) : <div></div>}
          {project.source_url && (
            <Link
              href={project.source_url}
              target={"_blank"}
              className={"bg-gray-500 text-2xl text-white p-4 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition-colors"}
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}