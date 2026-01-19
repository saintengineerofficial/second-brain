import { api } from "@/lib/hono/hono-rpc"
import { useQuery } from "@tanstack/react-query"

export const useChat = () => {
  return useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await api.chat.list.$get()
      if (!response.ok) throw new Error("Failed to fetch chat")
      return response.json()
    },
    select: data => data.data,
  })
}

export const useChatId = (id: string) => {
  return useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      const response = await api.chat[":id"].$get({ param: { id } })
      if (!response.ok) throw new Error("Failed to fetch chat")
      return response.json()
    },
    enabled: !!id,
    select: data => data.data,
  })
}
