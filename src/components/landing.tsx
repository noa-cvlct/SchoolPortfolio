interface LandingComponentProps {
  className?: string
}

export default function LandingComponent({className = ""}: Readonly<LandingComponentProps>) {
  return (
    <div id={"landing"} className={"h-landing -mb-10 flex flex-col justify-center gap-10 " + className}>
      <h1 className={"text-4xl"}>
        <span className={"text-blue-500"}>Bonjour, je suis Noa,</span><br/>
        Développeur web & mobile
      </h1>
      <p className={"text-2xl"}>
        Je suis passionné par la technologie et j&apos;aime créer des applications web et mobiles. Toujours à la
        recherche de nouveaux défis, j&apos;apprends constamment de nouvelles technologies.
      </p>
      <div>
        <a
          href={"/CAVALCANTE-Noa_CV.pdf"}
          download={"CAVALCANTE-Noa_CV.pdf"}
          className={"bg-blue-500 text-2xl text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors"}>
          Download my CV
        </a>
      </div>
    </div>
  )
}