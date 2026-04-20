"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { SafeImage } from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

function isLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <SafeImage
            src="/images/siraj-logo-horizontal.png"
            fallbackSrc="/images/fallback-solar.svg"
            alt="Siraj Solar"
            width={220}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Button asChild className="hidden rounded-full bg-navy px-5 py-2.5 text-sm text-navy-foreground shadow-elegant hover:opacity-90 md:inline-flex">
          <Link href="/contact" onClick={() => setOpen(false)}>
            Book a consultation
          </Link>
        </Button>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted",
                    active && "bg-muted text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

            <Button asChild className="mt-2 rounded-full bg-navy text-navy-foreground hover:opacity-90">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a consultation
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
