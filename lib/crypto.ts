import CryptoJS from "crypto-js"

export function aes(cipherTextBase64: string, passphrase: string) {
  const ct = String(cipherTextBase64).replace(/\s+/g, "")

  const bytes = CryptoJS.AES.decrypt(ct, passphrase)
  const plaintext = bytes.toString(CryptoJS.enc.Utf8)

  if (!plaintext) {
    throw new Error()
  }
  return plaintext
}
