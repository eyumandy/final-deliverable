import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Filter, AlertTriangle, BarChart3, Info } from "lucide-react"

export default function BiasAuditPage() {
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
                Bias Audit
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Bias Audit Dashboard</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Bias Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87/100</div>
              <div className="flex items-center">
                <span className="text-xs text-green-600 mr-1">↑ 5%</span>
                <p className="text-xs text-muted-foreground">from last quarter</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <div className="flex items-center">
                <span className="text-xs text-green-600 mr-1">↓ 3</span>
                <p className="text-xs text-muted-foreground">from last month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gender Balance</CardTitle>
              <Info className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Balanced</div>
              <div className="flex items-center">
                <span className="text-xs text-green-600 mr-1">✓</span>
                <p className="text-xs text-muted-foreground">No action needed</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Age Distribution</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Needs Attention</div>
              <div className="flex items-center">
                <span className="text-xs text-yellow-600 mr-1">!</span>
                <p className="text-xs text-muted-foreground">Senior candidates underrepresented</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="language">Language Analysis</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="history">Historical Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bias Audit Summary</CardTitle>
                <CardDescription>Comprehensive analysis of potential biases in the recruitment process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                    <h3 className="font-medium mb-2">Executive Summary</h3>
                    <p className="text-sm">
                      The current recruitment process shows significant improvement in bias mitigation compared to the
                      previous quarter. Gender representation is well-balanced across all job categories, and ethnic
                      diversity has improved by 12%. However, there are two areas that require attention: age
                      distribution in technical roles and potential language bias in certain job descriptions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Key Findings</h3>
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

          <TabsContent value="demographics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Demographic Analysis</CardTitle>
                <CardDescription>Detailed breakdown of candidate demographics and potential biases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Gender Distribution</h3>
                      <div className="h-[250px]">
                        <img
                          src="/placeholder.svg?height=250&width=400&query=gender+distribution+pie+chart+showing+balanced+representation"
                          alt="Gender distribution chart"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Women</span>
                          <span className="text-sm font-medium">48%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Men</span>
                          <span className="text-sm font-medium">49%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Non-binary/Other</span>
                          <span className="text-sm font-medium">3%</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-medium">Analysis:</span> Gender distribution is well-balanced across all
                          departments and seniority levels. No significant bias detected.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Age Distribution</h3>
                      <div className="h-[250px]">
                        <img
                          src="/placeholder.svg?height=250&width=400&query=age+distribution+bar+chart+showing+underrepresentation+of+senior+candidates"
                          alt="Age distribution chart"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Under 30</span>
                          <span className="text-sm font-medium">42%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">30-45</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Over 45</span>
                          <span className="text-sm font-medium">13%</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-sm text-yellow-800">
                          <span className="font-medium">Alert:</span> Candidates over 45 are significantly
                          underrepresented in technical roles (13% vs. industry average of 27%).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Ethnic Diversity</h3>
                      <div className="h-[250px]">
                        <img
                          src="/placeholder.svg?height=250&width=400&query=ethnic+diversity+chart+showing+candidate+demographics"
                          alt="Ethnic diversity chart"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-medium">Analysis:</span> Ethnic diversity has improved by 12% compared
                          to the previous quarter. Current representation is aligned with regional demographics.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Educational Background</h3>
                      <div className="h-[250px]">
                        <img
                          src="/placeholder.svg?height=250&width=400&query=educational+background+chart+showing+diverse+pathways"
                          alt="Educational background chart"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-medium">Analysis:</span> Good representation of candidates from diverse
                          educational backgrounds, including traditional degrees, bootcamps, and self-taught pathways.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Department-Specific Analysis</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="text-left p-2 text-sm font-medium">Department</th>
                            <th className="text-left p-2 text-sm font-medium">Gender Balance</th>
                            <th className="text-left p-2 text-sm font-medium">Age Distribution</th>
                            <th className="text-left p-2 text-sm font-medium">Ethnic Diversity</th>
                            <th className="text-left p-2 text-sm font-medium">Overall Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Engineering</td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                                Needs Attention
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                                Monitor
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Product</td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">Good</span>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Marketing</td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">Good</span>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Sales</td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Balanced
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                                Improving
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">Good</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Detailed Demographics Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="language" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Language Analysis</CardTitle>
                <CardDescription>
                  AI-powered analysis of language used in job descriptions and candidate evaluations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                    <h3 className="font-medium mb-2">Language Analysis Overview</h3>
                    <p className="text-sm">
                      DiversifAI analyzes the language used in job descriptions, interview feedback, and candidate
                      evaluations to identify potentially biased terms or patterns. This analysis helps ensure that the
                      recruitment process uses inclusive language that doesn't inadvertently discourage qualified
                      candidates from diverse backgrounds.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Job Description Analysis</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium">Senior Developer</h4>
                            <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                              Needs Revision
                            </span>
                          </div>
                          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md mb-3">
                            <p className="text-sm">
                              <span className="font-medium">Potentially biased language detected:</span>
                            </p>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-start gap-2">
                                <span className="text-yellow-600">!</span>
                                <div>
                                  <p className="text-sm font-medium">"Looking for a rockstar developer"</p>
                                  <p className="text-xs text-muted-foreground">
                                    Terms like "rockstar" can discourage candidates who don't identify with aggressive
                                    self-promotion.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-yellow-600">!</span>
                                <div>
                                  <p className="text-sm font-medium">"Ninja-level coding skills required"</p>
                                  <p className="text-xs text-muted-foreground">
                                    Terms like "ninja" use masculine-coded language that may discourage female
                                    applicants.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-yellow-600">!</span>
                                <div>
                                  <p className="text-sm font-medium">
                                    "Aggressive problem-solver who thrives under pressure"
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    "Aggressive" is masculine-coded and may discourage certain candidates.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-sm font-medium">Suggested alternatives:</p>
                            <ul className="mt-2 space-y-1">
                              <li className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>"Looking for an exceptional developer"</span>
                              </li>
                              <li className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>"Expert-level coding skills required"</span>
                              </li>
                              <li className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>"Effective problem-solver who performs well under pressure"</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium">Product Manager</h4>
                            <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                              Inclusive
                            </span>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-sm">
                              <span className="font-medium">Analysis:</span> This job description uses inclusive
                              language throughout. No biased terms detected.
                            </p>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <div>
                                  <p className="text-sm font-medium">"Collaborative team player"</p>
                                  <p className="text-xs text-muted-foreground">
                                    Neutral language that appeals to diverse candidates.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <div>
                                  <p className="text-sm font-medium">"Strong communication skills"</p>
                                  <p className="text-xs text-muted-foreground">
                                    Clear, neutral requirement without gendered language.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Interview Feedback Analysis</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium">Engineering Candidates</h4>
                            <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                              Potential Bias
                            </span>
                          </div>
                          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md mb-3">
                            <p className="text-sm">
                              <span className="font-medium">Pattern detected:</span> Different evaluation criteria
                              applied to candidates from non-traditional backgrounds.
                            </p>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-start gap-2">
                                <span className="text-yellow-600">!</span>
                                <div>
                                  <p className="text-sm font-medium">Inconsistent emphasis on formal education</p>
                                  <p className="text-xs text-muted-foreground">
                                    Candidates without CS degrees face more scrutiny on technical questions despite
                                    similar experience levels.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-yellow-600">!</span>
                                <div>
                                  <p className="text-sm font-medium">Different language for similar traits</p>
                                  <p className="text-xs text-muted-foreground">
                                    Male candidates described as "confident" while female candidates with similar
                                    behavior described as "aggressive."
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-sm font-medium">Recommendations:</p>
                            <ul className="mt-2 space-y-1">
                              <li className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>
                                  Implement structured interview templates with consistent evaluation criteria
                                </span>
                              </li>
                              <li className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Conduct bias awareness training for interviewers</span>
                              </li>
                              <li className="text-sm flex items-start gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Review feedback for consistency before final decisions</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="text-sm font-medium mb-2">Language Sentiment Analysis</h4>
                          <div className="h-[200px]">
                            <img
                              src="/placeholder.svg?height=200&width=350&query=language+sentiment+analysis+chart+showing+differences+in+feedback+by+candidate+group"
                              alt="Language sentiment analysis"
                              className="rounded-md w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Analysis of positive vs. negative language used in candidate feedback across different
                            demographic groups.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Common Biased Terms Detected</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="text-left p-2 text-sm font-medium">Term</th>
                            <th className="text-left p-2 text-sm font-medium">Category</th>
                            <th className="text-left p-2 text-sm font-medium">Potential Impact</th>
                            <th className="text-left p-2 text-sm font-medium">Suggested Alternative</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Rockstar, Ninja, Guru</td>
                            <td className="p-2 text-sm">Masculine-coded</td>
                            <td className="p-2 text-sm">May discourage female applicants</td>
                            <td className="p-2 text-sm">Expert, Specialist, Professional</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Aggressive, Dominant</td>
                            <td className="p-2 text-sm">Masculine-coded</td>
                            <td className="p-2 text-sm">May discourage female applicants</td>
                            <td className="p-2 text-sm">Assertive, Determined, Focused</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Young and dynamic</td>
                            <td className="p-2 text-sm">Age bias</td>
                            <td className="p-2 text-sm">May discourage older applicants</td>
                            <td className="p-2 text-sm">Energetic, Innovative, Adaptable</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 text-sm">Cultural fit</td>
                            <td className="p-2 text-sm">Potential exclusion</td>
                            <td className="p-2 text-sm">May favor homogeneous candidates</td>
                            <td className="p-2 text-sm">Values alignment, Team contribution</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2 w-full">
                  <Button variant="outline" className="flex-1">
                    Download Language Report
                  </Button>
                  <Button className="flex-1">Schedule Language Training</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
                <CardDescription>AI-generated recommendations to improve diversity and reduce bias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                    <h3 className="font-medium mb-2">Priority Recommendations</h3>
                    <p className="text-sm">
                      Based on the bias audit results, DiversifAI has identified the following priority actions to
                      address the most significant areas of concern. These recommendations are tailored to your
                      organization's specific needs and current recruitment processes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">Revise Technical Job Descriptions</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Update job descriptions for technical roles to remove potentially biased language and ensure
                            they appeal to a diverse candidate pool.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Remove terms like "rockstar," "ninja," and "aggressive"</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Use gender-neutral language throughout</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">
                                Focus on skills and experience rather than specific educational backgrounds
                              </span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button size="sm">Start Revision Process</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">Implement Blind Resume Screening</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Adopt a blind resume screening process for the initial evaluation stage to reduce
                            unconscious bias.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">
                                Remove names, photos, and demographic information during initial screening
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">
                                Focus evaluation on skills, experience, and qualifications
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Configure DiversifAI to automatically anonymize resumes</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button size="sm">Enable Blind Screening</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">Conduct Age Bias Training</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Organize training sessions focused on recognizing and mitigating age bias in technical
                            hiring.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">
                                Train recruiters and hiring managers on recognizing age bias
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">
                                Develop strategies for evaluating candidates of all ages fairly
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Create guidelines for age-inclusive interview questions</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button size="sm">Schedule Training</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          4
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">Standardize Interview Process</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Implement structured interview templates with consistent evaluation criteria for all
                            candidates.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Create standardized question sets for each role</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Develop clear evaluation rubrics with objective criteria</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <span className="text-sm">Ensure all candidates are evaluated on the same criteria</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button size="sm">Create Templates</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Long-term Strategies</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <div>
                            <p className="text-sm font-medium">Diverse Sourcing Channels</p>
                            <p className="text-xs text-muted-foreground">
                              Expand recruitment sources to reach more diverse candidate pools, including specialized
                              job boards and community organizations.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <div>
                            <p className="text-sm font-medium">Mentorship Programs</p>
                            <p className="text-xs text-muted-foreground">
                              Establish mentorship programs to support career development for underrepresented groups.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <div>
                            <p className="text-sm font-medium">Regular Bias Audits</p>
                            <p className="text-xs text-muted-foreground">
                              Conduct quarterly bias audits to monitor progress and identify new areas for improvement.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-3">Implementation Timeline</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium">Immediate (1-2 weeks)</p>
                            <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                              High Priority
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Revise job descriptions, implement blind resume screening
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium">Short-term (1 month)</p>
                            <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                              Medium Priority
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Conduct bias training, standardize interview process
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium">Long-term (3-6 months)</p>
                            <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                              Ongoing
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Expand sourcing channels, establish mentorship programs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-3">Expected Impact</h3>
                    <div className="h-[200px]">
                      <img
                        src="/placeholder.svg?height=200&width=800&query=projected+diversity+improvement+chart+showing+positive+trends"
                        alt="Projected diversity improvement"
                        className="rounded-md w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Projected impact of implementing the recommended actions on diversity metrics over the next 12
                      months.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Action Plan Document</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical Trends</CardTitle>
                <CardDescription>Analysis of bias metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                    <h3 className="font-medium mb-2">Trend Analysis</h3>
                    <p className="text-sm">
                      DiversifAI tracks bias metrics over time to help you understand the impact of your diversity
                      initiatives and identify areas for continued improvement. The data below shows how your
                      organization's bias metrics have changed over the past 12 months.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Overall Bias Score Trend</h3>
                    <div className="h-[300px]">
                      <img
                        src="/placeholder.svg?height=300&width=800&query=bias+score+trend+chart+showing+improvement+over+12+months"
                        alt="Bias score trend"
                        className="rounded-md w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Your organization's overall bias score has improved from 72 to 87 over the past 12 months,
                      indicating significant progress in reducing bias in your recruitment processes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Gender Balance Trend</h3>
                      <div className="h-[200px]">
                        <img
                          src="/placeholder.svg?height=200&width=400&query=gender+balance+trend+chart+showing+improvement+over+time"
                          alt="Gender balance trend"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-medium">Analysis:</span> Gender balance has steadily improved across all
                          departments, with technical roles showing the most significant progress (+15% female
                          representation).
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Age Distribution Trend</h3>
                      <div className="h-[200px]">
                        <img
                          src="/placeholder.svg?height=200&width=400&query=age+distribution+trend+chart+showing+slow+improvement"
                          alt="Age distribution trend"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-sm text-yellow-800">
                          <span className="font-medium">Analysis:</span> While there has been some improvement in age
                          diversity, the representation of candidates over 45 in technical roles remains below target.
                          This area requires continued focus.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Ethnic Diversity Trend</h3>
                      <div className="h-[200px]">
                        <img
                          src="/placeholder.svg?height=200&width=400&query=ethnic+diversity+trend+chart+showing+significant+improvement"
                          alt="Ethnic diversity trend"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-medium">Analysis:</span> Ethnic diversity has shown significant
                          improvement (+12%) across all departments, with representation now aligned with regional
                          demographics.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Language Bias Trend</h3>
                      <div className="h-[200px]">
                        <img
                          src="/placeholder.svg?height=200&width=400&query=language+bias+trend+chart+showing+reduction+in+biased+terms"
                          alt="Language bias trend"
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-medium">Analysis:</span> The use of potentially biased language in job
                          descriptions and candidate evaluations has decreased by 65% since implementing language
                          guidelines.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Key Milestones and Interventions</h3>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
                      <div className="space-y-6 relative">
                        <div className="flex gap-4">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 z-10">
                            1
                          </div>
                          <div className="p-4 border rounded-lg flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">Bias Training Implemented</h4>
                              <span className="text-xs text-muted-foreground">April 2024</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Conducted comprehensive bias awareness training for all recruiters and hiring managers.
                            </p>
                            <div className="mt-2 flex items-center">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Impact: +5 Bias Score
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 z-10">
                            2
                          </div>
                          <div className="p-4 border rounded-lg flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">Job Description Revision</h4>
                              <span className="text-xs text-muted-foreground">June 2024</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Updated all job descriptions to use inclusive language and focus on skills rather than
                              background.
                            </p>
                            <div className="mt-2 flex items-center">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Impact: +8 Bias Score
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 z-10">
                            3
                          </div>
                          <div className="p-4 border rounded-lg flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">Blind Resume Screening</h4>
                              <span className="text-xs text-muted-foreground">September 2024</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Implemented blind resume screening for initial candidate evaluation.
                            </p>
                            <div className="mt-2 flex items-center">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Impact: +7 Bias Score
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 z-10">
                            4
                          </div>
                          <div className="p-4 border rounded-lg flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">Structured Interview Process</h4>
                              <span className="text-xs text-muted-foreground">December 2024</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Standardized interview questions and evaluation criteria for all roles.
                            </p>
                            <div className="mt-2 flex items-center">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Impact: +6 Bias Score
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center flex-shrink-0 z-10">
                            5
                          </div>
                          <div className="p-4 border rounded-lg flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium">Diverse Sourcing Channels</h4>
                              <span className="text-xs text-muted-foreground">February 2025</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Expanded recruitment sources to reach more diverse candidate pools.
                            </p>
                            <div className="mt-2 flex items-center">
                              <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                                Impact: +4 Bias Score
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2 w-full">
                  <Button variant="outline" className="flex-1">
                    Download Historical Data
                  </Button>
                  <Button className="flex-1">Set New Diversity Goals</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
