import type { LocalText } from "./languages"

export type ExternalProfileLinkType = "qq" | "music" | "github" | "email"
export type ProfileLinkType = ExternalProfileLinkType | "wechat"

export interface ExternalProfileLink {
  type: ExternalProfileLinkType
  name: string
  url: string
}

export interface QrProfileLink {
  type: "wechat"
  name: string
  qrImage: string
  qrAlt: string
  label: string
}

export type ProfileLink = ExternalProfileLink | QrProfileLink

export const profile: {
  name: LocalText
  bio: LocalText
  avatar: string
  email: string
  links: ProfileLink[]
} = {
  name: "",
  bio: "",
  avatar: "",
  email: "",
  links: [],
}

export function profileContacts(lang: "en" | "zh"): ProfileLink[] {
  const email = profile.email.trim()
  if (!email) return profile.links
  return [...profile.links, { type: "email", name: lang === "zh" ? "电子邮件" : "Email", url: `mailto:${email}` }]
}
