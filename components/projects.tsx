"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

const projects = [
  {
    title: "Cardiac MRI Segmentation",
    description:
      "Medical imaging project focusing on left ventricle segmentation in cardiac MRI from 150 patients using fundamental image processing techniques. Part of my studies at Télécom Paris, analyzing various cardiac pathologies without AI.",
    tags: ["Medical Imaging", "OpenCV", "TorchIO", "Scikit-image"],
    image: "/cardiac-MRI-Seg.png",
    github: "https://github.com/titiuo/Segmentation-IRM",
    report: "/cardiac-MRI-report.pdf",
  },
  {
    title: "NFT Price Prediction with Compression Distances",
    description: "Used NCD to measure NFT similarity and estimate prices, leveraging a custom Python pipeline and an API to collect NFT data for analysis and model development.",
    tags: ["Kolmogorov Complexity", "Normalized Compression Distance"],
    image: "/NFT-picture.jpg",
    github: "https://github.com/titiuo/Normalized-Compression-Distances-for-NFT",
    report: "/NFT-report.pdf",
  },
  {
    title: "Automated Trading Bot for Injective Blockchain",
    description: "Python bot that automatically detects newly created tokens on Injective blockchain, identifies factory-type smart contracts, and executes automated purchases. Includes real-time scraping, transaction simulation, and Discord notifications for monitoring.",
    tags: ["Blockchain", "Smart Contract", "Injective API"],
    image: "/injective-picture.png",
    github: "https://github.com/titiuo/BOT-Injective2",
    report: null,
  },
]

export function Projects() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
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
                {project.report && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="gap-2" onClick={() => setSelectedPdf(project.report!)}>
                        <FileText className="h-4 w-4" />
                        Report
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[98vw] w-[98vw] h-[95vh] p-0">
                      {selectedPdf && (
                        <iframe
                          src={selectedPdf}
                          className="w-full h-full border-0"
                          title={`${project.title} Report`}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
