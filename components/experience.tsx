import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Research Intern",
    company: "Academic Research Lab",
    period: "Summer 2024",
    description:
      "Conducted research on machine learning algorithms for computer vision applications. Implemented novel approaches for image classification and worked on improving model efficiency.",
    skills: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Teaching Assistant",
    company: "University",
    period: "2023 - 2024",
    description:
      "Assisted professors in mathematics and programming courses. Helped students understand complex concepts in linear algebra, statistics, and Python programming.",
    skills: ["Mathematics", "Python", "Teaching", "Problem Solving"],
  },
  {
    title: "Data Science Project",
    company: "Personal Project",
    period: "2023",
    description:
      "Developed end-to-end machine learning projects including data collection, preprocessing, model training, and deployment. Focused on practical applications of ML algorithms.",
    skills: ["Data Science", "Machine Learning", "Statistics", "Visualization"],
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
