import type { LocalText } from "./languages"

export type ExternalProfileLinkType = "qq" | "music" | "github"
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
  links: ProfileLink[]
} = {
  name: { zh: "李哲楠", en: "Zhenan Li" },
  bio: { zh: "文章、实验与项目手记。", en: "Writing, experiments and project notes." },
  avatar: "/mark.png",
  links: [{ type: "github", name: "GitHub", url: "https://github.com/zhenan-li" }],
}
