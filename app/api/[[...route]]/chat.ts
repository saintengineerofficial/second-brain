import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import z, { string } from "zod"
import { getAuthUser } from "@/lib/hono/hono-middlware"
import prisma from "@/lib/prisma"
import { HTTPException } from "hono/http-exception"
import type { UIMessage } from "ai"
import type { ChatModel } from "@/lib/ai/models"

const chatSchema = z.object({
  id: z.string().min(1),
  message: z.custom<UIMessage>(),
  // selectedModel: z.custom<ChatModel["id"]>(),
  selectedModel: z.string() as z.ZodType<ChatModel["id"]>,
  selectedToolName: z.string().nullable(),
})

const chatIdSchema = z.object({
  id: z.string().min(1),
})

export const chatRoute = new Hono()
