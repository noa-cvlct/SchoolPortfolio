import Card from "@/components/cards/card";
import Image from "next/image";

interface TechnologyCardProps {
  title: string;
  src: string;
  alt: string;
}

export default function TechnologyCard({
                                         title,
                                         src,
                                         alt,
                                       }: Readonly<TechnologyCardProps>) {
  return (
    <Card className={"h-small-tile p-5 flex flex-col gap-small-gap justify-center items-center text-center"}>
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
      />
      <p className={"text-xs"}>{title}</p>
    </Card>
  );
}