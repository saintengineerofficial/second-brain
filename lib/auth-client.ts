import { useAuthToken } from "@/store/useAuthToken"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    fetchOptions: {
        auth: {
            type: 'Bearer',
            token:()=> useAuthToken.getState().bearerToken || ''
        }
    }
})