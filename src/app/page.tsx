import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold text-primary">Auth</div>
        <ThemeToggle />
      </header>

      {/* Navigation */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col gap-4">
          <Link href="/login">
            <Button size="lg" className="w-48">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="lg" variant="outline" className="w-48 bg-transparent">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
