"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LogOut } from "lucide-react"
import axios from "axios"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"

interface UserProfile {
  name: string
  email: string
}

export default function ProfilePage() {
  const profile: UserProfile = {
    name: "John Doe",
    email: "john@example.com",
  }

  const logouthandler = async () => {
    try {
      const response = await axios.get('/api/users/logout')
      toast.success("User Logged Out successfully")
    } catch (error: any) {
      console.log(error.message);
      toast.error("Logout issue")
    }
  }

  const [data, setdata] = useState(null)
  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    setdata(res.data.data)
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <header className="flex items-center justify-between p-6 border-b border-border">
        <Link href="/" className="text-2xl font-bold text-primary">
          Auth
        </Link>
        <ThemeToggle />
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-sm bg-card rounded-xl border border-border p-8 shadow-sm">
          <div className="space-y-6">
            {/* Username */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Username</p>
              <p className="text-lg font-semibold text-foreground">{data?data.username:profile.name}</p>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="text-lg font-semibold text-foreground break-all">{data?data.email:profile.email}</p>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={() => {
                logouthandler()
                window.location.href = "/login"
              }}
              className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut className="size-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
