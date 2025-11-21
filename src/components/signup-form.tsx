"use client"

import type React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle } from "lucide-react"

interface SignupFormProps {
  formData: {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
  }
  errors: Record<string, string>
  passwordStrength: number
  isLoading: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export function SignupForm({
  formData,
  errors,
  passwordStrength,
  isLoading,
  onChange,
  onSubmit,
}: SignupFormProps) {

  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"]
  const strengthColors = [
    "bg-destructive",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
  ]

  return (
    <form onSubmit={onSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={onChange}
          aria-invalid={!!errors.name}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <div className="flex gap-2 text-sm text-destructive">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.name}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="username" className="text-sm font-medium">
          Username
        </label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="johndoe"
          value={formData.username}
          onChange={onChange}
          aria-invalid={!!errors.username}
          className={errors.username ? "border-destructive" : ""}
        />
        {errors.username && (
          <div className="flex gap-2 text-sm text-destructive">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.username}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <div className="flex gap-2 text-sm text-destructive">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.email}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={onChange}
          aria-invalid={!!errors.password}
          className={errors.password ? "border-destructive" : ""}
        />
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    i < passwordStrength ? strengthColors[passwordStrength - 1] : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Strength: {strengthLabels[passwordStrength]}</p>
          </div>
        )}
        {errors.password && (
          <div className="flex gap-2 text-sm text-destructive">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.password}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password
        </label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={onChange}
          aria-invalid={!!errors.confirmPassword}
          className={errors.confirmPassword ? "border-destructive" : ""}
        />
        {formData.confirmPassword === formData.password && formData.password && (
          <div className="flex gap-2 text-sm text-green-600">
            <CheckCircle className="size-4 flex-shrink-0 mt-0.5" />
            Passwords match
          </div>
        )}
        {errors.confirmPassword && (
          <div className="flex gap-2 text-sm text-destructive">
            <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
            {errors.confirmPassword}
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
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  )
}
