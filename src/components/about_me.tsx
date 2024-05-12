interface AboutMeComponentProps {
  className?: string
}

export default function AboutMeComponent({className}: Readonly<AboutMeComponentProps>) {
  return (
    <div id={"about_me"} className={className}>
      <h2 className={"pb-10 text-4xl"}>À propos de moi</h2>
      <p className={"text-2xl"}>
        Bonjour ! Je suis Noa Cavalcante, un passionné d&apos;informatique résidant dans l&apos;Ain, en France. À 20
        ans, je suis en train de finaliser ma troisième année de Bachelor Universitaire de Technologie (BUT) en
        informatique.<br/>
        <br/>
        Mon parcours professionnel a débuté lors d&apos;un stage de trois mois au sein d&apos;une entreprise spécialisée
        dans le développement mobile et web, où j&apos;ai pu acquérir des compétences précieuses. Actuellement, je
        poursuis cette expérience en alternance au sein de la même entreprise, approfondissant ainsi mes connaissances
        et mon expertise dans le domaine.<br/>
        <br/>
        Je suis passionné par la création et le développement de solutions informatiques innovantes, et je suis
        constamment à la recherche de nouveaux défis pour enrichir mon parcours professionnel. Mon objectif est de
        contribuer activement au monde de la technologie en apportant des idées créatives et des solutions
        efficaces.<br/>
        <br/>
        N&apos;hésitez pas à parcourir mon portfolio pour découvrir mes réalisations et projets.
      </p>
    </div>
  )
}