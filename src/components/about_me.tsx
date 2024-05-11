interface AboutMeComponentProps {
  className?: string
}

export default function AboutMeComponent({className}: Readonly<AboutMeComponentProps>) {
  return (
    <div id={"about_me"} className={className}>
      <h2 className={"pb-5"}>À propos de moi</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
    </div>
  )
}