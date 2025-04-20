import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Settings } from "lucide-react"

export default function TransparencyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">
            D
          </div>
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
              <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                Candidates
              </Link>
            </li>
            <li className="font-medium text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                Jobs
              </Link>
            </li>
            <li className="font-medium text-sm">
              <Link href="#" className="text-purple-600 flex items-center gap-1">
                AI Transparency
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
            JD
          </div>
        </div>
      </header>
      
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">AI Decision Transparency</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Documentation
            </Button>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How DiversifAI Works</CardTitle>
            <CardDescription>Understanding the AI-powered recruitment recommendation system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <h3 className="font-medium mb-2">System Overview</h3>
              <p className="text-sm">
                DiversifAI uses a multi-factor analysis approach to evaluate candidates while actively mitigating potential biases. The system is designed to be transparent, allowing recruiters to understand the reasoning behind each recommendation and ensuring that AI decisions align with your organization's values and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                  1
                </div>
                <h3 className="font-medium mb-2">Data Collection</h3>
                <p className="text-sm text-muted-foreground">
                  DiversifAI analyzes candidate information from resumes, applications, portfolios, and initial screenings. The system only processes data that is relevant to job qualifications.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                  2
                </div>
                <h3 className="font-medium mb-2">Multi-factor Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Candidates are evaluated based on multiple factors including skills match, experience relevance, growth potential, and cultural alignment. Each factor is weighted according to your organization's priorities.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                  3
                </div>
                <h3 className="font-medium mb-2">Bias Detection & Mitigation</h3>
                <p className="text-sm text-muted-foreground">
                  The system actively identifies potential biases in the evaluation process and applies mitigation techniques to ensure fair assessment of all candidates regardless of background.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="evaluation" className="space-y-4">
          <TabsList>
            <TabsTrigger value="evaluation">Evaluation Factors</TabsTrigger>
            <TabsTrigger value="bias">Bias Mitigation</TabsTrigger>
            <TabsTrigger value="model">AI Model Information</TabsTrigger>
            <TabsTrigger value="customize">Customize Transparency</TabsTrigger>
          </TabsList>
          
          <TabsContent value="evaluation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Evaluation Factors</CardTitle>
                <CardDescription>Understanding how DiversifAI evaluates candidates</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Evaluation details would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="bias" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bias Mitigation Techniques</CardTitle>
                <CardDescription>How we ensure fair evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Bias mitigation details would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="model" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Model Information</CardTitle>
                <CardDescription>Technical details about our AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Model information would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customize" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customize Transparency</CardTitle>
                <CardDescription>Adjust how AI explains its decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Customization options would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}