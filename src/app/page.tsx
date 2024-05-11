import {AboutMeComponent, LandingComponent, ProjectsComponent, TechnologiesComponent} from "@/components";

export default function Root() {
  return (
    <div className="flex flex-col">
      <LandingComponent/>
      <AboutMeComponent className={"pt-12"}/>
      <ProjectsComponent className={"pt-12"}/>
      <TechnologiesComponent className={"pt-12"}/>
    </div>
  );
}
