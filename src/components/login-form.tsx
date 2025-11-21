"use client"

import type React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface LoginFormProps {
  formData: {
    email: string
    password: string
  }
  errors: Record<string, string>
  isLoading: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export function LoginForm({
  formData,
  errors,
  isLoading,
  onChange,
  onSubmit,
}: LoginFormProps) {

  return (
    <form onSubmit={onSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          name="email"
          value={formData.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <div className="flex gap-2 text-sm text-destructive mt-1">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.email}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Link href="/forgotpassword" className="text-xs text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={onChange}
          aria-invalid={!!errors.password}
          className={errors.password ? "border-destructive" : ""}
        />
        {errors.password && (
          <div className="flex gap-2 text-sm text-destructive mt-1">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.password}
          </div>
        )}
      </div>

      {errors.submit && (
        <div className="flex gap-2 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          {errors.submit}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/signup" className="text-primary font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  )
}
