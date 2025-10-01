import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Leading development of core platform features and mentoring junior developers. Architected scalable solutions serving millions of users.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description:
      "Built and maintained multiple client-facing applications. Improved performance by 40% through optimization and refactoring.",
    skills: ["Next.js", "PostgreSQL", "Docker", "GraphQL"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2020 - 2021",
    description:
      "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
    skills: ["JavaScript", "React", "CSS", "REST APIs"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          My professional journey and the roles that shaped my expertise.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {experiences.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.company} • {item.period}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
