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
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <Card>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-sun text-navy">
                <Send className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-navy">Thank you!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your message has been received. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
