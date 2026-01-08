import { customProvider, gateway } from "ai"
import { chatModels, DEVELOPMENT_CHAT_MODEL } from "./models"
import { google } from "@ai-sdk/google"

export const isProduction = process.env.NODE_ENV! === "production"

const createLanguageModels = () => {
  const models: Record<string, any> = {}
  chatModels.forEach(model => {
    models[model.id] = gateway.languageModel(model.id)
  })

  models[DEVELOPMENT_CHAT_MODEL] = google.languageModel(DEVELOPMENT_CHAT_MODEL)

  models["title-model"] = isProduction ? gateway.languageModel("google/gemini-2.0-flash") : google.languageModel(DEVELOPMENT_CHAT_MODEL)

  return models
}

export const ModelProvider = customProvider({
  languageModels: createLanguageModels(),
})
