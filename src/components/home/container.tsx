export default function Container({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className="py-20">
      <div className={`container mx-auto space-y-6 px-5 lg:px-28 ${className}`}>
        {(title ?? description) && (
          <div className="text-center">
            {title && (
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
