"use client"

import * as React from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
      </label>
      <Input id={name} name={name} type={type} required placeholder={placeholder} className="mt-2" />
    </div>
  )
}

export function ContactForm() {
  const [showToast, setShowToast] = React.useState(false)

  React.useEffect(() => {
    if (!showToast) return

    const timeout = setTimeout(() => {
      setShowToast(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [showToast])

  return (
    <>
      <Card>
        <CardContent>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setShowToast(false)
              requestAnimationFrame(() => {
                setShowToast(true)
              })
            }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label="Phone" name="phone" />
              <Field label="Project type" name="type" placeholder="Residential, Commercial..." />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-navy">
                Tell us about your project
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2"
                placeholder="Goals, location, timeline..."
              />
            </div>
            <Button
              type="submit"
              className="mt-8 inline-flex h-auto w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground shadow-elegant hover:opacity-90"
            >
              Send message <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      <div aria-live="polite" className="pointer-events-none fixed bottom-6 right-6 z-50">
        {showToast ? (
          <div className="pointer-events-auto max-w-sm rounded-xl border border-gold/40 bg-background px-4 py-3 text-sm text-foreground shadow-elegant">
            We&apos;ll fix this soon. Please contact us via email at{" "}
            <a href="mailto:contact@sirajsolar.com" className="font-semibold text-navy underline underline-offset-2">
              contact@sirajsolar.com
            </a>
            .
          </div>
        ) : null}
      </div>
    </>
  )
}
