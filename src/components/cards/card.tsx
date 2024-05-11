interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
                               children,
                               className = "",
                             }: Readonly<CardProps>) {
  return (
    <div
      className={
        "border-[1px] border-blue-500 rounded-lg hover:shadow-lg transition-shadow "
        + className
      }
    >
      {children}
    </div>
  );
}