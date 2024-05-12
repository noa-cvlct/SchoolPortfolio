import {technologies} from "@/data/data";
import TechnologyCard from "@/components/cards/technology_card";

interface TechnologiesComponentProps {
  className?: string
}

export default function TechnologiesComponent({className}: Readonly<TechnologiesComponentProps>) {
  return (
    <div id={"technologies"} className={className}>
      <h2 className={"pb-10 text-4xl"}>Technologies</h2>
      <div className={"grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-small-gap"}>
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>
    </div>
  )
}