import Container from '@/components/home/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const data = {
  id: 'faq',
  title: 'Preguntas Frecuentes',
  description: 'Encuentra respuestas a las preguntas más comunes',
  faqs: [
    {
      question: '¿Qué servicios ofrecen?',
      answer:
        'Ofrecemos desarrollo web personalizado, e-commerce, aplicaciones web progresivas, y más.',
    },
    {
      question: '¿Cómo puedo contactar con ustedes?',
      answer:
        'Puedes contactarnos a través del formulario en la sección de contacto o llamando a nuestro número de teléfono.',
    },
    {
      question: '¿Cuánto tiempo tarda un proyecto?',
      answer:
        'El tiempo de desarrollo varía según la complejidad del proyecto, pero generalmente toma entre 4 a 8 semanas.',
    },
    {
      question: '¿Ofrecen soporte después del lanzamiento?',
      answer:
        'Sí, ofrecemos soporte continuo y mantenimiento para asegurar que tu sitio web esté siempre actualizado y seguro.',
    },
  ],
};

export function FAQSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background transition-shadow hover:shadow-lg">
        <Accordion type="single" collapsible>
          {data.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="flex w-full justify-between p-6 text-left text-lg font-semibold">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="overflow-hidden">
                  <p>{faq.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
