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
                          <div className="h-[120px] bg-gray-100 flex items-center justify-center rounded-md">
                            <div className="text-gray-500">Gender balance chart</div>
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
                          <div className="h-[120px] bg-gray-100 flex items-center justify-center rounded-md">
                            <div className="text-gray-500">Age distribution chart</div>
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
                    <div className="h-[200px] bg-gray-100 flex items-center justify-center rounded-md">
                      <div className="text-gray-500">Historical bias trends chart</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Generate Comprehensive Bias Report</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Additional TabsContent sections for demographics, language, etc. */}
          <TabsContent value="demographics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Demographic Analysis</CardTitle>
                <CardDescription>Detailed breakdown of candidate demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Demographic analysis content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="language" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Language Analysis</CardTitle>
                <CardDescription>Analysis of language in job descriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Language analysis content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
                <CardDescription>AI-generated recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Recommendations content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical Trends</CardTitle>
                <CardDescription>Analysis of bias metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Historical trends content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}