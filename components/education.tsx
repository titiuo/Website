import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2018 - 2022",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Master of Science in Software Engineering",
    institution: "University Name",
    period: "2022 - 2024",
    description: "Specialized in distributed systems and cloud architecture. Thesis on scalable microservices.",
  },
]

export function Education() {
  return (
    <section id="education" className="bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My academic background and continuous learning journey.
          </p>
        </div>

        <div className="max-w-3xl space-y-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{item.degree}</CardTitle>
                    <CardDescription className="text-base">
                      {item.institution} • {item.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
