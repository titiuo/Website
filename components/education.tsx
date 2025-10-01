"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

const education = [
  {
    degree: "Master 2 - Mathematics, Vision, Learning (MVA)",
    degreeLink: "https://www.master-mva.com/",
    institutions: [
      { name: "ENS Paris-Saclay", link: "https://ens-paris-saclay.fr" },
      { name: "Institut Polytechnique de Paris", link: "https://www.ip-paris.fr" },
      { name: "Université Paris Cité", link: "https://u-paris.fr" }
    ],
    period: "Sept. 2025 - June 2026",
    description: "A rigorous research master dedicated to the study and development of advanced mathematical methods for data analysis. The program emphasizes a strong foundation in theoretical mathematics, algorithm design, and machine learning, with hands-on applications in computer vision, biomedical imaging, and complex data-driven problems.",
    coursework: [
      "Probabilistic Graphical Models",
      "Reinforcement Learning", 
      "Optimal Transport",
      "Time Series",
      "Geometry Processing and Geometric Deep Learning",
      "Geometric Data Analysis"
    ],
    gpa: "GPA: -/4.0",
  },
  {
    degree: "General Baccalaureate",
    degreeLink: null,
    institutions: [{ name: "High School", link: null }],
    period: "2020 - 2023",
    description: "General education with specialization in mathematics and sciences. Development of logical foundations necessary for advanced mathematical studies.",
  },
]

export function Education() {
  const [openCourses, setOpenCourses] = useState<{ [key: number]: boolean }>({})

  const toggleCourses = (index: number) => {
    setOpenCourses(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section id="education" className="bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My academic background and continuous learning journey in mathematics and data science.
          </p>
        </div>

        <div className="max-w-5xl space-y-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {item.degreeLink ? (
                        <a 
                          href={item.degreeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {item.degree}
                        </a>
                      ) : (
                        item.degree
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {item.institutions.map((inst, instIndex) => (
                        <span key={instIndex}>
                          {inst.link ? (
                            <a 
                              href={inst.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {inst.name}
                            </a>
                          ) : (
                            inst.name
                          )}
                          {instIndex < item.institutions.length - 1 && " - "}
                        </span>
                      ))}
                      {" • "}{item.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                
                {item.coursework && (
                  <Collapsible open={openCourses[index]} onOpenChange={() => toggleCourses(index)}>
                    <CollapsibleTrigger className="flex items-center gap-2 text-sm text-foreground hover:underline cursor-pointer">
                      <span>Courses and Grades</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        openCourses[index] ? 'rotate-180' : ''
                      }`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3 space-y-2">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="mb-3">
                          <span className="font-semibold text-foreground">{item.gpa}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Coursework:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-muted-foreground">
                            {item.coursework.map((course, courseIndex) => (
                              <li key={courseIndex} className="flex items-center gap-2">
                                <span className="text-primary text-xs">•</span>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
