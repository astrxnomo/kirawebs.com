import { Client } from "@notionhq/client"

export const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const DATABASE_IDS = {
  contact: process.env.NOTION_CONTACT_DATABASE_ID,
} as const
