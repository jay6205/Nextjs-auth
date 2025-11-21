"use client"
import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type React from "react"
import toast from "react-hot-toast"
import axios from "axios"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      const user = {
        email: formData.email,
        password: formData.password,
      }
      const response = await axios.post("/api/users/login", user)

      setErrors({})
      toast.success("Login successful!")
      router.push("/profile")
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || error.message || "Network error. Please try again."
      toast.error(errorMessage)
      setErrors({ submit: errorMessage })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold text-primary">
          Auth
        </Link>
        <ThemeToggle />
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground mb-8">Sign in to your account to continue</p>

            <LoginForm
              formData={formData}
              errors={errors}
              isLoading={isLoading}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Footer Links */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            {" • "}
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
