import type { LocalText } from "@/data/languages"

export interface JourneyEntry {
  id?: string
  date: string
  end?: string
  title: LocalText
  description?: LocalText
  links?: { label: LocalText; href: string }[]
}
function validDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const instant = new Date(value + "T00:00:00Z")
  return Number.isFinite(instant.valueOf()) && instant.toISOString().slice(0, 10) === value
}

export function groupJourney(entries: JourneyEntry[]) {
  const groups = new Map<string, JourneyEntry[]>()
  const ids = new Set<string>()
  for (const entry of [...entries].sort((a,b) => b.date.localeCompare(a.date))) {
    if (!validDate(entry.date) || (entry.end && entry.end !== "ongoing" && (!validDate(entry.end) || entry.end < entry.date)))
      throw new Error("Invalid journey date range: " + entry.date)
    if (entry.id && ids.has(entry.id)) throw new Error("Duplicate journey id: " + entry.id)
    if (entry.id) ids.add(entry.id)
    const year = entry.date.slice(0, 4)
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year)!.push(entry)
  }
  return [...groups]
}
