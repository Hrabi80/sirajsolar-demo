"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type EmailMaintenanceLinkProps = {
  email: string
  className?: string
}

export function EmailMaintenanceLink({ email, className }: EmailMaintenanceLinkProps) {
  const [isToastOpen, setIsToastOpen] = React.useState(false)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  function showToast() {
    setIsToastOpen(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsToastOpen(false)
      timeoutRef.current = null
    }, 6000)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={showToast}
        className={cn("cursor-pointer text-left underline-offset-4 hover:underline", className)}
      >
        {email}
      </button>

      <div
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed right-4 top-4 z-[100] w-[min(92vw,420px)] rounded-2xl border border-border bg-card p-4 shadow-elegant transition-all",
          isToastOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        )}
      >
        <p className="text-sm font-semibold text-navy">Email service update</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Email sending from this website is currently under maintenance. We will restore this
          functionality soon. In the meantime, you can reach us directly at {email}.
        </p>
      </div>
    </>
  )
}
