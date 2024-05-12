import {projects} from "@/data/data";
import ProjectCard from "@/components/cards/project_card";

interface ProjectsComponentProps {
  className?: string
}

export default function ProjectsComponent({className}: Readonly<ProjectsComponentProps>) {
  return (
    <div id={"projects"} className={className}>
      <h2 className={"pb-10 text-4xl"}>Projets</h2>
      <div className={"grid grid-cols-1 sm:grid-cols-2 gap-gap"}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}