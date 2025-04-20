import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"


export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function CandidateProfile({ params }: { params: { id: string } }) {
  const candidateId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">D</div>
          <span>DiversifAI</span>
        </div>
        <nav className="flex-1">
          <ul className="flex gap-4 lg:gap-6">
            <li className="font-medium text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                Dashboard
              </Link>
            </li>
            <li className="font-medium text-sm">
              <Link href="#" className="text-purple-600 flex items-center gap-1">
                Candidates
              </Link>
            </li>
            <li className="font-medium text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                Jobs
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="h-6 w-px bg-border"></div>
          <span className="text-sm text-muted-foreground">Candidate Profile: {candidateId}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Profile</CardTitle>
                <CardDescription>Candidate ID: {candidateId}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-gray-200 mb-3 flex items-center justify-center">
                    <span className="text-gray-600">Photo</span>
                  </div>
                  <h2 className="text-xl font-bold">Candidate {candidateId}</h2>
                  <p className="text-muted-foreground">Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Details</CardTitle>
                <CardDescription>Information about this candidate</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a simplified version of the candidate profile page designed to work with static export.</p>
                <p className="mt-2">In a real application, this would display detailed information about candidate {candidateId}.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}