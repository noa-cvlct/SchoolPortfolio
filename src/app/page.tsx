"use client";
import {AboutMeComponent, LandingComponent, ProjectsComponent, TechnologiesComponent} from "@/components";
import Link from "next/link";
import {useEffect, useState} from "react";
import {GoArrowUp} from "react-icons/go";

const threshold = 0.50;

export default function Root() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;

      if (scrollPercentage > threshold * 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return (
    <div className="flex flex-col">
      <LandingComponent/>
      <ProjectsComponent className={"pt-24"}/>
      <TechnologiesComponent className={"pt-24"}/>
      <AboutMeComponent className={"pt-24"}/>
      {showButton && (
        <Link href={"/#landing"} className={"fixed bottom-5 right-5 bg-blue-500 p-4 rounded-full"}>
          <GoArrowUp className={"h-8 w-8 text-white"}/>
        </Link>
      )}
    </div>
  );
}
