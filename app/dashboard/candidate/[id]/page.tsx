import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, Calendar, FileText, MessageSquare, BarChart3, AlertTriangle } from "lucide-react"

export default function CandidateProfile({ params }: { params: { id: string } }) {
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
                      src="/placeholder.svg?height=96&width=96&query=professional+headshot"
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

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>AI Match Analysis</CardTitle>
                <CardDescription>Why this candidate matches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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

          <div className="md:col-span-2 space-y-6">
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
                        <div>
                          <p className="text-sm font-medium">Employment Gap</p>
                          <p className="text-sm text-muted-foreground">
                            "What professional development or projects did you work on during 2020-2021?"
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Problem Solving</p>
                          <p className="text-sm text-muted-foreground">
                            "Describe a challenging technical problem you faced and how you approached solving it."
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Team Collaboration</p>
                          <p className="text-sm text-muted-foreground">
                            "How do you handle disagreements within your development team about technical approaches?"
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="space-y-4">
                    <div className="space-y-6">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">TechCorp Inc.</h3>
                          <span className="text-sm text-muted-foreground">2021 - Present</span>
                        </div>
                        <p className="text-sm font-medium mb-1">Senior Full Stack Developer</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Led development of enterprise-level web applications using React, Node.js, and AWS.
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>
                              Led a team of 5 developers to rebuild the company's customer portal, resulting in 40%
                              improved performance.
                            </span>
                          </p>
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>
                              Implemented microservices architecture that improved scalability and reduced deployment
                              times by 60%.
                            </span>
                          </p>
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>
                              Established CI/CD pipelines using GitHub Actions and AWS, reducing deployment errors by
                              80%.
                            </span>
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Technologies used:</p>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">React</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">Node.js</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">TypeScript</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">AWS</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">Docker</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">MongoDB</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">WebSolutions Ltd.</h3>
                          <span className="text-sm text-muted-foreground">2017 - 2020</span>
                        </div>
                        <p className="text-sm font-medium mb-1">Full Stack Developer</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Developed and maintained web applications for clients across various industries.
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Built responsive web applications for 15+ clients using React and Express.js.</span>
                          </p>
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Optimized database queries that improved application performance by 35%.</span>
                          </p>
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>
                              Collaborated with UX designers to implement accessible and user-friendly interfaces.
                            </span>
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Technologies used:</p>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">JavaScript</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">React</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">Express.js</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">PostgreSQL</span>
                            <span className="text-xs bg-gray-100 py-0.5 px-1.5 rounded">Redis</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Employment Gap</h3>
                          <span className="text-sm text-muted-foreground">2020 - 2021</span>
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md mb-3">
                          <p className="text-sm">
                            <span className="font-medium">AI Note:</span> This gap coincides with the COVID-19 pandemic
                            period. Candidate mentioned freelance work during this time in their cover letter.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Freelance development work for 3 clients (portfolio available)</span>
                          </p>
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Completed AWS certification</span>
                          </p>
                          <p className="text-sm flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span>Contributed to open-source projects (GitHub activity verified)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-3">Technical Skills Assessment</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">JavaScript/TypeScript</span>
                              <span className="text-sm font-medium">95%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "95%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">React</span>
                              <span className="text-sm font-medium">92%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "92%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Node.js</span>
                              <span className="text-sm font-medium">90%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "90%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">GraphQL</span>
                              <span className="text-sm font-medium">65%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "65%" }}></div>
                            </div>
                            <p className="text-xs text-yellow-600">Below required level (80%)</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">AWS/Cloud</span>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "85%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">CI/CD</span>
                              <span className="text-sm font-medium">88%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "88%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Soft Skills Assessment</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Communication</span>
                              <span className="text-sm font-medium">90%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "90%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Leadership</span>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "85%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Problem Solving</span>
                              <span className="text-sm font-medium">95%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "95%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Teamwork</span>
                              <span className="text-sm font-medium">88%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "88%" }}></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Adaptability</span>
                              <span className="text-sm font-medium">92%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-600 h-full rounded-full" style={{ width: "92%" }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3 className="font-medium mb-3">AI-Detected Strengths</h3>
                          <div className="space-y-2">
                            <p className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Strong problem-solving abilities demonstrated in portfolio projects</span>
                            </p>
                            <p className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Clear communication style in written application materials</span>
                            </p>
                            <p className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Evidence of leadership in previous roles</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Portfolio & Code Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        AI analysis of candidate's GitHub repositories and portfolio projects.
                      </p>

                      <div className="space-y-4">
                        <div className="p-3 border rounded-md">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium">E-commerce Platform</h4>
                            <a href="#" className="text-xs text-purple-600 hover:underline">
                              View Project
                            </a>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Full-stack e-commerce application with React, Node.js, and MongoDB.
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>
                                Code quality: <span className="font-medium">Excellent</span> - Well-structured, follows
                                best practices
                              </span>
                            </p>
                            <p className="text-xs flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>
                                Documentation: <span className="font-medium">Good</span> - Clear README and inline
                                comments
                              </span>
                            </p>
                            <p className="text-xs flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>
                                Testing: <span className="font-medium">Moderate</span> - Unit tests present but limited
                                coverage
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="p-3 border rounded-md">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium">Task Management App</h4>
                            <a href="#" className="text-xs text-purple-600 hover:underline">
                              View Project
                            </a>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            React-based task management application with drag-and-drop functionality.
                          </p>
                          <div className="space-y-1">
                            <p className="text-xs flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>
                                Code quality: <span className="font-medium">Very Good</span> - Clean code with component
                                reusability
                              </span>
                            </p>
                            <p className="text-xs flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>
                                Documentation: <span className="font-medium">Excellent</span> - Comprehensive
                                documentation
                              </span>
                            </p>
                            <p className="text-xs flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>
                                Testing: <span className="font-medium">Good</span> - Jest and React Testing Library used
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="interview" className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                      <p className="text-sm">
                        <span className="font-medium">Note:</span> Initial screening interview conducted on March 20,
                        2025. Technical interview scheduled for March 25, 2025.
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Initial Screening Notes</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium">Communication Skills</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Candidate communicated clearly and professionally. Articulated technical concepts well and
                            asked thoughtful questions about the role and company.
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium">Technical Background</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Provided detailed explanations of previous projects and technical challenges. Demonstrated
                            strong understanding of full-stack development concepts.
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium">Employment Gap</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Explained that during 2020-2021, they focused on freelance work and professional development
                            after being laid off due to COVID-19 impacts. Completed AWS certification during this
                            period.
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium">Cultural Fit</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Values align well with company culture. Emphasized collaboration, continuous learning, and
                            quality code. Showed enthusiasm for our mission and products.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">AI-Suggested Technical Interview Questions</h3>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-md">
                          <p className="text-sm font-medium">GraphQL Experience</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            "Can you describe your experience with GraphQL? What advantages do you see in using GraphQL
                            over REST APIs?"
                          </p>
                          <p className="text-xs text-purple-600 mt-1">
                            Rationale: Candidate's GraphQL experience is below the required level. This question will
                            help assess their understanding and potential to learn quickly.
                          </p>
                        </div>

                        <div className="p-3 border rounded-md">
                          <p className="text-sm font-medium">System Architecture</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            "Describe how you would architect a scalable microservices-based application. What
                            considerations would you make for data consistency and service communication?"
                          </p>
                          <p className="text-xs text-purple-600 mt-1">
                            Rationale: Tests candidate's system design knowledge, which is critical for the senior role
                            they're applying for.
                          </p>
                        </div>

                        <div className="p-3 border rounded-md">
                          <p className="text-sm font-medium">Problem Solving</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            "Can you walk us through how you would optimize a React application that's experiencing
                            performance issues?"
                          </p>
                          <p className="text-xs text-purple-600 mt-1">
                            Rationale: Assesses problem-solving approach and React optimization knowledge, which aligns
                            with their strongest skills.
                          </p>
                        </div>

                        <div className="p-3 border rounded-md">
                          <p className="text-sm font-medium">Team Leadership</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            "Tell us about a time when you had to lead a team through a challenging technical
                            implementation. How did you approach it?"
                          </p>
                          <p className="text-xs text-purple-600 mt-1">
                            Rationale: Evaluates leadership experience and approach, which is important for the senior
                            role.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Interview Feedback Form</h3>
                        <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                          Pending Technical Interview
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium">Overall Assessment</label>
                          <select className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm">
                            <option>Select rating</option>
                            <option>Strong Yes</option>
                            <option>Yes</option>
                            <option>Maybe</option>
                            <option>No</option>
                            <option>Strong No</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-medium">Technical Skills</label>
                          <select className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm">
                            <option>Select rating</option>
                            <option>Exceptional</option>
                            <option>Strong</option>
                            <option>Satisfactory</option>
                            <option>Needs Improvement</option>
                            <option>Insufficient</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-medium">Cultural Fit</label>
                          <select className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm">
                            <option>Select rating</option>
                            <option>Exceptional</option>
                            <option>Strong</option>
                            <option>Satisfactory</option>
                            <option>Needs Improvement</option>
                            <option>Insufficient</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-medium">Comments</label>
                          <textarea
                            className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm"
                            rows={4}
                            placeholder="Enter your feedback here..."
                          ></textarea>
                        </div>

                        <Button className="w-full">Submit Feedback</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

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
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Communication and leadership abilities</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Problem-solving approach and adaptability</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Bias Mitigation Applied</h3>
                      <ul className="space-y-1">
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Employment gap during pandemic not penalized</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Diverse experience pathways valued equally</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Blind initial resume screening applied</span>
                        </li>
                      </ul>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View Full AI Evaluation Methodology
                    </Button>
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
                      <p className="text-sm text-green-700 mt-1">
                        This candidate shows strong potential for the Senior Developer role based on skills match and
                        experience.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="text-sm font-medium">Schedule Technical Interview</p>
                          <p className="text-xs text-muted-foreground">
                            Focus on GraphQL knowledge and system architecture
                          </p>
                          <Button size="sm" className="mt-2">
                            Schedule Interview
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="text-sm font-medium">Request Code Sample</p>
                          <p className="text-xs text-muted-foreground">Ask for GraphQL-specific code example</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Request Sample
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <div>
                          <p className="text-sm font-medium">Check References</p>
                          <p className="text-xs text-muted-foreground">
                            Verify leadership experience and team collaboration
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Contact References
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium">Decision Timeline</h3>
                        <span className="text-xs text-muted-foreground">5 days remaining</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="bg-purple-600 h-full rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
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
