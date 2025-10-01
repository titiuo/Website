import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with Next.js and TypeScript, featuring real-time updates and modern UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/modern-web-dashboard.png",
    github: "#",
    report: "/reports/project-one.pdf",
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with seamless checkout experience and inventory management.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/ecommerce-shopping-interface.jpg",
    github: "#",
    report: "/reports/project-two.pdf",
  },
  {
    title: "Project Three",
    description: "AI-powered analytics dashboard providing insights and data visualization for business metrics.",
    tags: ["Python", "React", "Machine Learning"],
    image: "/analytics-dashboard.png",
    github: "#",
    report: "/reports/project-three.pdf",
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A selection of my recent work showcasing various technologies and problem-solving approaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.report} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Report
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
