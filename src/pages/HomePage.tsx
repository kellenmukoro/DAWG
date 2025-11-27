import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Users, BookOpen, Lightbulb, Handshake, ArrowRight } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const sections = [
    {
      icon: Lightbulb,
      title: "About Us",
      description: "Learn about our mission to advance ethical data science and human well-being",
      page: "about",
      color: "primary"
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Meet the researchers and experts dedicated to data well-being",
      page: "team",
      color: "secondary"
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "Explore our cutting-edge projects and publications",
      page: "research",
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "Blog",
      description: "Read insights and perspectives from our team members",
      page: "blog",
      color: "secondary"
    },
    {
      icon: Handshake,
      title: "Partners",
      description: "Discover our collaborators across academia, industry, and community",
      page: "partners",
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Large Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBjYWxtfGVufDF8fHx8MTc2MjcwMTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Data Well-being"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay using brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40"></div>
          <div className="absolute inset-0 bg-background/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-8 inline-block">
              <div className="bg-background/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl border border-border">
                <h1 className="text-primary mb-1">DAWG</h1>
                <p className="text-foreground/80">Data Well-being Group</p>
              </div>
            </div>

            {/* Tagline */}
            <h2 className="text-white mb-6 drop-shadow-lg">
              Where Data Meets Human Flourishing
            </h2>
            <p className="text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
              Advancing research at the intersection of data science, technology ethics, 
              and human well-being. We develop frameworks, tools, and insights to ensure 
              data serves people's best interests.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={() => onNavigate("about")}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg backdrop-blur-sm"
                onClick={() => onNavigate("research")}
              >
                Explore Research
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <p className="text-white/70">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mt-2 flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Discover DAWG</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Explore our work across research, community, and collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                const isWide = index === sections.length - 1 && sections.length % 3 === 1;
                
                return (
                  <Card
                    key={section.page}
                    className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden ${
                      isWide ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''
                    }`}
                    onClick={() => onNavigate(section.page)}
                  >
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                        section.color === 'primary' 
                          ? 'bg-primary/20' 
                          : 'bg-secondary/30'
                      }`}>
                        <Icon className={`h-8 w-8 ${
                          section.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>
                      <h3 className="mb-2">{section.title}</h3>
                      <p className="text-foreground/70 mb-4">{section.description}</p>
                      <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                        <span>Explore</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1568217716588-97944ab3e893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwY2FsbXxlbnwxfHx8fDE3NjI3MjQ2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Our Approach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/20"></div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <h2 className="mb-6">Our Approach</h2>
                <p className="text-foreground/80 mb-6">
                  We believe that data science should serve humanity. Our interdisciplinary 
                  team combines expertise in computer science, psychology, ethics, and policy 
                  to create frameworks and tools that put people first.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="mb-1">Evidence-Based</h4>
                      <p className="text-foreground/70">Rigorous research methods and empirical validation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                    </div>
                    <div>
                      <h4 className="mb-1">Human-Centered</h4>
                      <p className="text-foreground/70">Technology designed with people's needs at the core</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="mb-1">Collaborative Impact</h4>
                      <p className="text-foreground/70">Partnering across sectors for real-world change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-primary mb-2">50+</div>
                <p className="text-foreground/70">Publications</p>
              </div>
              <div className="text-center">
                <div className="text-secondary mb-2">12</div>
                <p className="text-foreground/70">Active Projects</p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-2">25+</div>
                <p className="text-foreground/70">Partners</p>
              </div>
              <div className="text-center">
                <div className="text-secondary mb-2">8</div>
                <p className="text-foreground/70">Policy Impacts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-border shadow-lg">
              <h2 className="mb-4">Join Us in Shaping the Future</h2>
              <p className="text-foreground/80 mb-8">
                Whether you're a researcher, organization, or individual interested in data well-being, 
                we'd love to connect with you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => onNavigate("team")}
                >
                  Join Our Team
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => onNavigate("partners")}
                >
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
