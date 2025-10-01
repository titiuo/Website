import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          A passionate developer focused on creating elegant solutions to complex problems. I specialize in building
          modern web applications with clean, maintainable code.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2">
            <Mail className="h-4 w-4" />
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
