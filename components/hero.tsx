import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 text-balance">
          <span className="text-primary">Titouan Duhazé</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Student @ MVA ENS Paris-Saclay | Télécom Paris
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-justify w-full">
          Hi 👋! I'm Titouan, a student passionate about the intersection of mathematics and Machine Learning. Currently, I'm completing my Master 2 (M2) in MVA (Mathematics, Vision, and Learning) at ENS Paris-Saclay, a top program in the field. This portfolio showcases my projects, experiences, and journey in data science and AI.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:titouan.dh@gmail.com">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
            <a href="https://github.com/titiuo" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
            <a href="https://linkedin.com/in/titouan-duhaze" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
