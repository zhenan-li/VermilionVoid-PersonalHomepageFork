import type { LocalText } from "./languages"

export interface Project {
  id: string
  title: LocalText
  english?: string
  description: LocalText
  url: string
}

export const projects: Project[] = []
