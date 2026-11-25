import { localText, siteName, siteDescription, type Locale } from "@/data/languages"
import { msg } from "@/lib/ui"
import { navigation } from "@/data/navigation"
import type { ComponentType, SVGProps } from "react"
import { Github, Music, Rss } from "lucide-react"
import { profile, type ExternalProfileLink, type ExternalProfileLinkType } from "@/data/profile"
import { QqIcon } from "@/components/icons/qq-icon"

const iconMap: Record<ExternalProfileLinkType, ComponentType<SVGProps<SVGSVGElement>>> = {
  qq: QqIcon,
  music: Music,
  github: Github,
}

export function Footer({ lang }: { lang: Locale }) {
  const navItems = navigation(lang)
  const contacts = profile.links.filter((link): link is ExternalProfileLink => link.type !== "wechat")
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 bg-secondary">
                <img
                  src={profile.avatar || "/mark.png"}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-foreground font-medium">{siteName[lang]}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {localText(profile.bio, lang) || siteDescription[lang]}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:flex md:justify-center">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">{msg(lang, "导航")}</h4>
              <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            </div>
          </div>

          {/* Connect */}
          <div className="md:flex md:justify-end">
            <div>
              {contacts.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">{msg(lang, "联系")}</h4>
                  <div className="flex items-center gap-4">
                    {contacts.map((link) => {
                      const Icon = iconMap[link.type]
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                          aria-label={link.name}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
              <p className="text-muted-foreground text-sm">{msg(lang, "通过 RSS 订阅，获取最新文章更新。")}</p>
              <a
                href={"/" + lang + "/rss.xml"}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                <Rss className="w-4 h-4" />
                {msg(lang, "订阅 RSS")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 grid gap-4 md:grid-cols-3">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {localText(profile.name, lang) || siteName[lang]}</p>
          <a
            href="https://github.com/Lapis0x0/VermilionVoid"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground text-xs hover:text-foreground transition-colors duration-200 group md:justify-end md:pr-4"
          >
            <Github className="w-3.5 h-3.5" />
            <span>{msg(lang, "博客主题：朱墨留白 | VermilionVoid")}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
