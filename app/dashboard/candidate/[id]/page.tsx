/**
 * File: app/dashboard/candidate/[id]/page.tsx
 * Purpose: Renders a detailed candidate profile page with AI-powered insights
 * Author: Your Name
 * Created: April 2025
 * Dependencies: Next.js, React, UI components
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, Calendar, FileText, MessageSquare, BarChart3, AlertTriangle } from "lucide-react"

// Properly type the params according to Next.js App Router requirements
type CandidateProfileProps = {
  params: {
    id: string
  }
}

export default function CandidateProfile({ params }: CandidateProfileProps) {
  // In a real app, you would fetch candidate data based on the ID
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
            <li className="font-medium text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                Analytics
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Settings
          </Button>
          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
            JD
          </div>
        </div>
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
          <span className="text-sm text-muted-foreground">Candidate Profile</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Candidate Profile</CardTitle>
                <CardDescription>Detailed information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-gray-200 mb-3">
                    <img
                      src="/api/placeholder/96/96"
                      alt="Candidate profile"
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold">Alex Johnson</h2>
                  <p className="text-muted-foreground">Senior Full Stack Developer</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm bg-green-100 text-green-800 py-0.5 px-2 rounded-full">92% Match</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">alex.johnson@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Applied on March 15, 2025</span>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-medium mb-2">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">JavaScript</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">React</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">Node.js</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">TypeScript</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">GraphQL</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">AWS</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">Docker</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Resume
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </CardFooter>
            </Card>

            {/* AI Match Analysis Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>AI Match Analysis</CardTitle>
                <CardDescription>Why this candidate matches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Match percentages */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Overall Match</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Technical Skills</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  
                  {/* More skill metrics... */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Experience</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cultural Fit</span>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Growth Potential</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2">Key Strengths</h3>
                  <ul className="space-y-1">
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Strong experience with our tech stack</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Led similar projects successfully</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Excellent problem-solving skills</span>
                    </li>
                  </ul>
                </div>

                {/* Areas of Consideration */}
                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2">Areas of Consideration</h3>
                  <ul className="space-y-1">
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-yellow-600">!</span>
                      <span>Limited experience with GraphQL (required)</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-yellow-600">!</span>
                      <span>Gap in employment history (2020-2021)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Detailed Analysis
                </Button>
              </CardFooter>
            </Card>

            {/* Bias Detection Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Bias Detection</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                </div>
                <CardDescription>Potential bias alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md mb-3">
                  <p className="text-sm font-medium text-yellow-800">Employment Gap</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    System detected a potential bias in evaluation due to employment gap during 2020-2021.
                  </p>
                  <p className="text-xs text-yellow-600 mt-1">
                    Note: This gap coincides with the COVID-19 pandemic period.
                  </p>
                </div>

                <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm font-medium text-green-800">Bias Mitigation Applied</p>
                  <p className="text-sm text-green-700 mt-1">
                    Employment gap during pandemic period was not factored negatively in the evaluation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content area - right side */}
          <div className="md:col-span-2 space-y-6">
            {/* Main evaluation card with tabs */}
            <Card>
              <CardHeader>
                <CardTitle>Candidate Evaluation</CardTitle>
                <CardDescription>Comprehensive assessment with AI-powered insights</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="summary" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
                    <TabsTrigger value="interview">Interview Notes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                      <h3 className="font-medium mb-2">AI-Generated Summary</h3>
                      <p className="text-sm">
                        Alex Johnson is a highly qualified Senior Full Stack Developer with 8 years of experience in web
                        application development. Their technical expertise closely aligns with our requirements,
                        particularly in JavaScript, React, and Node.js. Alex has demonstrated strong leadership
                        capabilities, having led teams of 3-5 developers on projects similar to our current needs.
                      </p>
                      <p className="text-sm mt-2">
                        While there is a gap in employment history during 2020-2021 (coinciding with the pandemic), Alex
                        has maintained skill relevance through freelance projects and continued education. Their
                        problem-solving approach and communication skills, as evidenced in their portfolio and initial
                        screening, suggest they would integrate well with our team culture.
                      </p>
                      <p className="text-sm mt-2">
                        Recommendation: <span className="font-medium">Proceed to technical interview</span>
                      </p>
                    </div>

                    {/* Qualifications and Areas sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-3">Key Qualifications</h3>
                        <ul className="space-y-2">
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>8 years of full-stack development experience</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Proficient in JavaScript, TypeScript, React, Node.js</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Experience with microservices architecture</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Led development teams of 3-5 people</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>Implemented CI/CD pipelines for enterprise applications</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-3">Areas for Exploration</h3>
                        <ul className="space-y-2">
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-yellow-600">!</span>
                            <span>Limited GraphQL experience (mentioned in resume but not extensive)</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-yellow-600">!</span>
                            <span>Employment gap during 2020-2021</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-yellow-600">!</span>
                            <span>No direct experience with our specific industry</span>
                          </li>
                          <li className="text-sm flex items-start gap-2">
                            <span className="text-yellow-600">!</span>
                            <span>Potential relocation needs (currently in different city)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Additional tabs content omitted for brevity */}
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Suggested Interview Questions</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium">Technical Experience</p>
                          <p className="text-sm text-muted-foreground">
                            "Can you describe your experience with GraphQL and how you've implemented it in previous
                            projects?"
                          </p>
                        </div>
                        {/* Other interview questions */}
                        <div>
                          <p className="text-sm font-medium">Employment Gap</p>
                          <p className="text-sm text-muted-foreground">
                            "What professional development or projects did you work on during 2020-2021?"
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Additional tab content */}
                  <TabsContent value="experience">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Professional Experience</h3>
                      <p className="text-sm">Experience details would appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="skills">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Skills Assessment</h3>
                      <p className="text-sm">Skills assessment would appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="interview">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Interview Notes</h3>
                      <p className="text-sm">Interview notes would appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Cards at the bottom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Transparency</CardTitle>
                  <CardDescription>Understanding the evaluation process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-purple-50 border border-purple-100 rounded-md">
                      <p className="text-sm">
                        <span className="font-medium">How this candidate was evaluated:</span> DiversifAI analyzed the
                        candidate's resume, portfolio, and initial screening responses against the job requirements
                        using natural language processing and pattern recognition.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Factors Considered</h3>
                      <ul className="space-y-1">
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Technical skills match with job requirements</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Relevant experience and project history</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                  <CardDescription>Recommended actions for this candidate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm font-medium text-green-800">
                        AI Recommendation: Proceed to Technical Interview
                      </p>
                    </div>
                    {/* Rest of content */}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1">
                      Reject
                    </Button>
                    <Button className="flex-1">Move Forward</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}