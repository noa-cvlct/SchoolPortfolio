import {technologies} from "@/data/data";
import TechnologyCard from "@/components/cards/technology_card";

interface TechnologiesComponentProps {
  className?: string
}

export default function TechnologiesComponent({className}: Readonly<TechnologiesComponentProps>) {
  return (
    <div id={"technologies"} className={className}>
      <h2 className={"pb-5"}>Technologies</h2>
      <div className={"grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-small-gap"}>
        {technologies.map((technologies) => (
          <TechnologyCard
            key={technologies.id}
            title={technologies.title}
            src={technologies.src}
            alt={technologies.alt}
          />
        ))}
      </div>
    </div>
  )
}