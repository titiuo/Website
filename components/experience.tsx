import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Private Tutor",
    period: "Sept. 2024 – Nov. 2024",
    description:
      "Provided mathematics tutoring to a student from L'École du Louvre, who passed the entrance exam for the Master's program at ESSEC Business School.",
  },
  {
    title: "Farm Intern at",
    company: "GoodMoon Farm",
    companyLink: "https://www.goodmoonfarm.com",
    period: "Jul. 2024 – Aug. 2024",
    location: "British Virgin Islands",
    description:
      "Completed an internship on a local farm specializing in organic food production.",
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
                  <CardTitle className="text-xl mb-1">
                    {item.title}{" "}
                    {item.companyLink ? (
                      <a href={item.companyLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.location && `${item.location} • `}
                    {item.period}
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
    </section>
  )
}
