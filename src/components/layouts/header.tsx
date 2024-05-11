import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="px-4 sm:px-12 md:px-48 sticky top-0 h-10 w-full bg-white flex flex-row justify-between items-center shadow-md">
      <p>Portfolio</p>
      <nav className={"flex flex-row gap-8 text-sm"}>
        <Link href={"/#projects"}>Projets</Link>
        <Link href={"/#technologies"}>Technologies</Link>
        <Link href={"/#about_me"}>À propos de moi</Link>
      </nav>
      <div>
        <Image src={"/linkedin.png"} alt={"linkedin"} width={16} height={16}/>
      </div>
    </header>
  );
}
