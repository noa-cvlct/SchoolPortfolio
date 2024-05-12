import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="px-8 md:px-24 xl:px-48 2xl:px-96 sticky top-0 h-20 w-full bg-white flex flex-row justify-between items-center shadow-md"
    >
      <Link href={"/#landing"} className={"text-4xl"}>Portfolio</Link>
      <nav className={"flex flex-row gap-16 text-2xl"}>
        <Link href={"/#projects"}>Projets</Link>
        <Link href={"/#technologies"}>Technologies</Link>
        <Link href={"/#about_me"}>À propos de moi</Link>
      </nav>
      <div>
        <Image src={"/linkedin.png"} alt={"linkedin"} width={32} height={32}/>
      </div>
    </header>
  );
}
