import Card from "@/components/cards/card";
import Image from "next/image";
import {Technology} from "@/types/data_types";

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({technology}: Readonly<TechnologyCardProps>) {
  return (
    <Card className={"h-small-tile p-10 flex flex-col gap-small-gap justify-center items-center text-center"}>
      <Image
        src={"/SchoolPortfolio" + technology.src}
        alt={technology.alt}
        width={64}
        height={64}
      />
      <p className={"text-2xl text-wrap"}>{technology.title}</p>
    </Card>
  );
}