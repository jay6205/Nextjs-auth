import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AlertTriangle } from "lucide-react"

export default function ServerErrorPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold text-primary">
          Auth
        </Link>
        <ThemeToggle />
      </header>

      {/* Error Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-7xl font-bold text-destructive mb-4">500</h1>
            <div className="w-20 h-20 bg-gradient-to-br from-destructive/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="size-10 text-destructive" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-3">Server Error</h2>
          <p className="text-muted-foreground mb-8">
            Something went wrong on our end. Our team has been notified and is working to fix it.
          </p>

          <div className="flex flex-col gap-3">
            <Link href="/">
              <Button className="w-full">Go Home</Button>
            </Link>
            <Link href="#">
              <Button variant="outline" className="w-full bg-transparent">
                Contact Support
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Error Code: <span className="font-mono">500</span>
          </p>
        </div>
      </div>
    </main>
  )
}
