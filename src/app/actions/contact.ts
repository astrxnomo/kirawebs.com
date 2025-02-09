"use server"

import { Ratelimit } from "@upstash/ratelimit"
import { z } from "zod"

import { DATABASE_IDS, notion } from "@/lib/notion"
import { redis } from "@/lib/redis"

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, "60 s"),
})

const FormSchema = z.object({
  email: z.string().email("Email inválido"),
  description: z
    .string()
    .min(5, "La descripción debe tener al menos 5 caracteres")
    .max(1500, "La descripción debe tener menos de 1000 caracteres"),
})

export async function sendEmail(prevState: unknown, formData: FormData) {
  const clientIp = formData.get("clientIp") as string
  const result = await ratelimit.limit(clientIp)

  if (!result.success) {
    return {
      success: false,
      title: "Límite de envíos alcanzado",
      details: "Por favor, espera un momento antes de intentar nuevamente.",
    }
  }

  const rawData = {
    email: formData.get("email"),
    description: formData.get("description"),
  }

  const validationResult = FormSchema.safeParse(rawData)

  if (!validationResult.success) {
    return {
      success: false,
      title: "Datos inválidos",
      details:
        "Por favor, verifica que tu email sea válido y que la descripción tenga entre 5 y 1500 caracteres.",
    }
  }

  const { email, description } = validationResult.data

  try {
    const response = await notion.pages.create({
      parent: { database_id: DATABASE_IDS.contact! },
      properties: {
        email: {
          title: [{ text: { content: email } }],
        },
        description: {
          rich_text: [{ text: { content: description } }],
        },
      },
    })

    if (!response) {
      return {
        success: false,
        title: "Error al enviar los datos",
        details:
          "No pudimos enviar tus datos en este momento. Por favor, intenta nuevamente más tarde o contáctanos por otro medio.",
      }
    }

    return {
      success: true,
      title: "¡Mensaje enviado!",
      details:
        "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    }
  } catch {
    return {
      success: false,
      title: "Error al enviar los datos",
      details:
        "Hubo un problema al procesar tu solicitud. Por favor, intenta más tarde o contáctanos directamente.",
    }
  }
}
