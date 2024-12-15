export default function Container({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="py-20">
      <div className={`container mx-auto px-5 lg:px-28 ${className}`}>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tighter">{title}</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
