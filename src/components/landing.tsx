interface LandingComponentProps {
  className?: string
}

export default function LandingComponent({className = ""}: Readonly<LandingComponentProps>) {
  return (
    <div className={"h-landing -mb-10 flex flex-col justify-center gap-10 " + className}>
      <h1><span className={"text-blue-500"}>Hello, I'm Noa,</span><br/> Web & mobile developer</h1>
      <p className={"text-xs"}>
        I'm passionate about technology and I love to create web and mobile applications. I'm always looking for new
        challenges and I'm constantly learning new technologies.
      </p>
    </div>
  )
}