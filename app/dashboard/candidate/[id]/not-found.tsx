import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CandidateNotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">D</div>
          <span>DiversifAI</span>
        </div>
      </header>

      <main className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Candidate Not Found</h1>
          <p className="text-muted-foreground mb-6">The candidate profile you are looking for does not exist or is not available.</p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Dashboard
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}