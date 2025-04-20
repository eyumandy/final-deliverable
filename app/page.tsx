import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart3, Users, Settings, Search, Filter, Info } from "lucide-react"

export default function Dashboard() {
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
              <Link href="#" className="text-purple-600 flex items-center gap-1">
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
              <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                Analytics
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
      <main className="flex-1 p-6 pt-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search candidates..."
                className="rounded-md border border-input pl-8 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="bias-audit">Bias Audit</TabsTrigger>
            <TabsTrigger value="transparency">AI Transparency</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Candidates</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Diversity Score</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">3 urgent positions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bias Alerts</CardTitle>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Requires attention</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Candidate Pipeline</CardTitle>
                  <CardDescription>Current recruitment funnel status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center">
                    <img src="/recruitment-funnel.png" alt="Recruitment funnel chart" className="rounded-md" />
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Diversity Metrics</CardTitle>
                  <CardDescription>Candidate pool composition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center">
                    <img src="/candidate-demographics-overview.png" alt="Diversity metrics chart" className="rounded-md" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Candidates</CardTitle>
                <CardDescription>AI-recommended candidates based on skill match and diversity factors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0">
                        <img
                          src={`/confident-professional.png?height=40&width=40&query=professional+headshot+${i}`}
                          alt="Candidate profile"
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">Candidate {i}</h3>
                          <span className="text-sm bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                            {90 + i}% Match
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">Senior Developer • 5 years exp.</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Candidates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Evaluation</CardTitle>
                <CardDescription>AI-powered candidate assessment with transparency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0">
                        <img
                          src={`/confident-professional.png?height=48&width=48&query=professional+headshot+${i + 3}`}
                          alt="Candidate profile"
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">Alex Johnson {i}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-purple-100 text-purple-800 py-0.5 px-2 rounded-full">
                              {95 - i * 3}% Match
                            </span>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Full Stack Developer • 7 years experience</p>
                        <div className="grid grid-cols-3 gap-4 mt-3">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Technical Skills</p>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="bg-purple-600 h-full rounded-full"
                                style={{ width: `${90 - i * 2}%` }}
                              ></div>
                            </div>
                            <p className="text-xs font-medium">{90 - i * 2}%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Cultural Fit</p>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="bg-purple-600 h-full rounded-full"
                                style={{ width: `${85 - i * 3}%` }}
                              ></div>
                            </div>
                            <p className="text-xs font-medium">{85 - i * 3}%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Growth Potential</p>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="bg-purple-600 h-full rounded-full"
                                style={{ width: `${88 - i * 2}%` }}
                              ></div>
                            </div>
                            <p className="text-xs font-medium">{88 - i * 2}%</p>
                          </div>
                        </div>
                        <div className="mt-3 text-sm">
                          <span className="font-medium text-purple-600 cursor-pointer hover:underline">
                            View AI assessment explanation →
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    3
                  </Button>
                </div>
                <Button>Next</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="bias-audit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bias Audit Dashboard</CardTitle>
                <CardDescription>Comprehensive analysis of potential biases in the recruitment process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Bias Detection Summary</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Gender Representation</h4>
                            <span className="text-sm bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                              Balanced
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Current candidate pool shows balanced gender representation across all job categories.
                          </p>
                          <div className="h-[120px]">
                            <img
                              src="/balanced-gender-distribution.png"
                              alt="Gender balance chart"
                              className="rounded-md w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Age Distribution</h4>
                            <span className="text-sm bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                              Needs Attention
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            Potential bias detected: Senior candidates (45+) are underrepresented in technical roles.
                          </p>
                          <div className="h-[120px]">
                            <img
                              src="/age-bias-recruitment.png"
                              alt="Age distribution chart"
                              className="rounded-md w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Language Analysis</h3>
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground mb-3">
                          AI analysis of job descriptions and candidate feedback for potentially biased language.
                        </p>
                        <div className="space-y-3">
                          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                            <p className="text-sm font-medium text-yellow-800">Job Description: Senior Developer</p>
                            <p className="text-sm text-yellow-700 mt-1">
                              Detected potentially biased terms:{" "}
                              <span className="underline">rockstar, ninja, aggressive</span>
                            </p>
                            <p className="text-xs text-yellow-600 mt-1">
                              These terms may discourage certain candidate groups from applying.
                            </p>
                          </div>

                          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-sm font-medium text-green-800">Job Description: Product Manager</p>
                            <p className="text-sm text-green-700 mt-1">
                              No biased language detected. Inclusive language used throughout.
                            </p>
                          </div>

                          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                            <p className="text-sm font-medium text-yellow-800">
                              Interview Feedback: Engineering Candidates
                            </p>
                            <p className="text-sm text-yellow-700 mt-1">
                              Potential pattern detected: Different evaluation criteria applied to candidates from
                              non-traditional backgrounds.
                            </p>
                          </div>
                        </div>

                        <Button variant="outline" size="sm" className="mt-4 w-full">
                          View Detailed Language Analysis
                        </Button>
                      </div>

                      <div className="p-4 border rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Recommended Actions</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm">
                            <div className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                              1
                            </div>
                            <span>Revise Senior Developer job description to use more inclusive language</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm">
                            <div className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                              2
                            </div>
                            <span>Implement blind resume screening for initial candidate evaluation</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm">
                            <div className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                              3
                            </div>
                            <span>Conduct training session on age bias in technical hiring</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Historical Bias Trends</h3>
                    <div className="h-[200px]">
                      <img
                        src="/placeholder.svg?height=200&width=800&query=historical+bias+trends+chart+showing+improvement+over+time"
                        alt="Historical bias trends"
                        className="rounded-md w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Comprehensive Bias Report</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="transparency" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Decision Transparency</CardTitle>
                <CardDescription>Understanding how DiversifAI makes recruitment recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <h3 className="text-lg font-medium mb-2">How DiversifAI Works</h3>
                    <p className="text-sm text-muted-foreground">
                      DiversifAI uses a multi-factor analysis approach to evaluate candidates while actively mitigating
                      potential biases. The system is designed to be transparent, allowing recruiters to understand the
                      reasoning behind each recommendation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Candidate Evaluation Factors</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Skills Match</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: "35%" }}></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm">Experience Relevance</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: "25%" }}></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm">Cultural Alignment</span>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: "20%" }}></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm">Growth Potential</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: "15%" }}></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm">Education</span>
                          <span className="text-sm font-medium">5%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: "5%" }}></div>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-sm text-yellow-800">
                          <span className="font-medium">Note:</span> These weightings can be customized in settings to
                          align with your organization's priorities.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Bias Mitigation Techniques</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <p className="text-sm font-medium">Blind Resume Screening</p>
                            <p className="text-xs text-muted-foreground">
                              Names, photos, and demographic information are hidden during initial screening.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <p className="text-sm font-medium">Diverse Training Data</p>
                            <p className="text-xs text-muted-foreground">
                              AI models are trained on diverse datasets to minimize algorithmic bias.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <p className="text-sm font-medium">Regular Bias Audits</p>
                            <p className="text-xs text-muted-foreground">
                              Automated and manual reviews of AI decisions to detect and correct potential biases.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                            4
                          </div>
                          <div>
                            <p className="text-sm font-medium">Alternative Pathway Recognition</p>
                            <p className="text-xs text-muted-foreground">
                              System recognizes non-traditional career paths and education as valuable experience.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                            5
                          </div>
                          <div>
                            <p className="text-sm font-medium">Human-in-the-Loop Verification</p>
                            <p className="text-xs text-muted-foreground">
                              Critical decisions always include human oversight and verification.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-3">Sample AI Decision Explanation</h3>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200">
                          <img
                            src="/placeholder.svg?height=40&width=40&query=professional+headshot"
                            alt="Candidate profile"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Jamie Smith</h4>
                          <p className="text-sm text-muted-foreground">Senior Developer Position • 92% Match</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium">Why this candidate was recommended:</h5>
                          <ul className="mt-1 space-y-1">
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>
                                8 years of relevant experience in full-stack development (matched 5 required skills)
                              </span>
                            </li>
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Led 3 projects similar to our current requirements</span>
                            </li>
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Demonstrated problem-solving abilities through portfolio projects</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium">Potential areas of concern:</h5>
                          <ul className="mt-1 space-y-1">
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-yellow-600">!</span>
                              <span>Limited experience with our specific tech stack (React/Node.js)</span>
                            </li>
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-yellow-600">!</span>
                              <span>Gap in employment history (2020-2021)</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium">Bias mitigation applied:</h5>
                          <ul className="mt-1 space-y-1">
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>Employment gap was not penalized as it occurred during pandemic period</span>
                            </li>
                            <li className="text-sm flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span>Non-traditional education pathway was evaluated based on skill demonstration</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">AI Model Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Model Version</span>
                          <span className="text-sm">DiversifAI v2.4.1</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Last Updated</span>
                          <span className="text-sm">March 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Training Dataset</span>
                          <span className="text-sm">Diverse Recruitment Dataset v3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Bias Audit Frequency</span>
                          <span className="text-sm">Weekly</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Human Oversight</span>
                          <span className="text-sm">Required for final decisions</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        View Model Documentation
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Customize AI Transparency</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Adjust how detailed the AI explanations should be for your team.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Explanation Detail Level</span>
                          <select className="text-sm rounded-md border border-input px-3 py-1">
                            <option>Detailed</option>
                            <option>Standard</option>
                            <option>Basic</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Show Confidence Scores</span>
                          <div className="h-4 w-8 bg-purple-600 rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Show Bias Mitigation Steps</span>
                          <div className="h-4 w-8 bg-purple-600 rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Include Model Information</span>
                          <div className="h-4 w-8 bg-purple-600 rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 w-full">Save Preferences</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
