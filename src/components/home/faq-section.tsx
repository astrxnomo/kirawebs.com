import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Container from "./container"

const data = {
  id: "faqs",
  title: "Preguntas Frecuentes",
  description: "Encuentra respuestas a las preguntas más comunes",
  faqs: [
    {
      id: "1",
      question: "¿Qué servicios ofrecen?",
      answer:
        "Ofrecemos desarrollo web personalizado, e-commerce, aplicaciones web progresivas, y más.",
    },
    {
      id: "2",
      question: "¿Cómo puedo contactar con ustedes?",
      answer:
        "Puedes contactarnos a través del formulario en la sección de contacto o llamando a nuestro número de teléfono.",
    },
    {
      id: "3",
      question: "¿Cuánto tiempo tarda un proyecto?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto, pero generalmente toma entre 4 a 8 semanas.",
    },
    {
      id: "4",
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer:
        "Sí, ofrecemos soporte continuo y mantenimiento para asegurar que tu sitio web esté siempre actualizado y seguro.",
    },
  ],
}

export function FAQSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-3xl space-y-2"
        defaultValue="3"
      >
        {data.faqs.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded border bg-background px-4 py-1"
          >
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}
