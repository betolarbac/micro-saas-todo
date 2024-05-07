'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const form = useForm()
  const router = useRouter()

  const handleSubmit = form.handleSubmit(async (data) => {

    try {
      await signIn('nodemailer', {email: data.email, redirect: false})

      toast({
        title: 'Magic Link Send',
        description: 'Check your email'
      })
      router.push('/auth/magic-link-sent')

    } catch (error) {
      toast({
        title: 'Error',
        description: 'deu Tudo errado '
      })
    }
  })


  return (
    <div className="mx-auto max-w-sm space-y-8 border border-border p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email to receive a magic link</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" {... form.register('email')} />
          </div>
          <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Sending...' : 'Send Magic Link'}
          </Button>
        </form>
    </div>
  )
}

