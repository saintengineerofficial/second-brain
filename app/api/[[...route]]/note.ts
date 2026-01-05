import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import z, { string } from "zod"
import { getAuthUser } from "@/lib/hono/hono-middlware"
import prisma from "@/lib/prisma"
import { HTTPException } from "hono/http-exception"

const noteCreateSchema = z.object({ title: string().min(1), content: string() })

export const noteRoute = new Hono().post("/create", zValidator("json", noteCreateSchema), getAuthUser, async c => {
  try {
    const { title, content } = c.req.valid("json")
    const user = c.get("user")
    const note = await prisma.note.create({
      data: {
        title,
        content,
        userId: user.id,
      },
    })

    return c.json({
      code: 200,
      message: "success",
      data: note,
    })
  } catch (error) {
    console.log(error)
    throw new HTTPException(500, { message: "Failed to create note" })
  }
})
