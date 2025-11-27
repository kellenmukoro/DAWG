import { Button } from "../components/ui/button";
import { BookOpen, Lightbulb } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Data Well-being Group</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Advancing research at the intersection of data science, technology ethics, and human well-being. 
              We develop frameworks, tools, and insights to ensure data serves people's best interests.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => onNavigate("research")}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Research
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h2>About DAWG</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <h3 className="mb-4">Our Mission</h3>
                <p className="text-foreground/80 mb-4">
                  The Data Well-being Group (DAWG) is dedicated to understanding and improving the relationship 
                  between data practices and human flourishing. We believe that data science should be conducted 
                  with people's well-being at the center.
                </p>
                <p className="text-foreground/80">
                  Through rigorous research, ethical frameworks, and practical tools, we work to ensure that 
                  data-driven technologies enhance rather than diminish quality of life.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg border border-border shadow-sm">
                <h3 className="mb-4">Research Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Privacy-preserving data collection methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span className="text-foreground/80">Digital well-being metrics and frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Ethical AI and algorithmic transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span className="text-foreground/80">Social media and mental health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Data governance and policy development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Values Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-accent/20 rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">🔒</span>
                </div>
                <h4 className="mb-2">Privacy First</h4>
                <p className="text-foreground/70">Protecting individual privacy while advancing research</p>
              </div>
              <div className="text-center p-6 bg-secondary/20 rounded-lg border border-border">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary">🌱</span>
                </div>
                <h4 className="mb-2">Human-Centered</h4>
                <p className="text-foreground/70">Technology designed with people's well-being in mind</p>
              </div>
              <div className="text-center p-6 bg-accent/20 rounded-lg border border-border">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">🤝</span>
                </div>
                <h4 className="mb-2">Collaborative</h4>
                <p className="text-foreground/70">Working across disciplines and sectors for impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
