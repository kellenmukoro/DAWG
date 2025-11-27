import { ProjectCard } from "../components/ProjectCard";
import { BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function ResearchPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-eb1fb471/research-projects`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );
      const data = await res.json();
      if (data.success) {
        setProjects(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching research projects:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading research projects...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-10 w-10 text-primary" />
              <h2>Research Projects</h2>
            </div>
            <p className="text-foreground/80">
              Our research spans multiple domains, from privacy-preserving methodologies to 
              understanding the societal impacts of data-driven technologies. Each project 
              is designed to produce actionable insights and practical tools.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Research Impact */}
          <div className="mt-16 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-lg p-8 border border-border">
            <h3 className="mb-6 text-center">Research Impact</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="mb-2">
                  <span className="text-primary">50+</span>
                </div>
                <p className="text-foreground/70">Publications</p>
              </div>
              <div>
                <div className="mb-2">
                  <span className="text-primary">12</span>
                </div>
                <p className="text-foreground/70">Active Projects</p>
              </div>
              <div>
                <div className="mb-2">
                  <span className="text-primary">8</span>
                </div>
                <p className="text-foreground/70">Policy Impacts</p>
              </div>
              <div>
                <div className="mb-2">
                  <span className="text-primary">25+</span>
                </div>
                <p className="text-foreground/70">Collaborators</p>
              </div>
            </div>
          </div>

          {/* Publications Section */}
          <div className="mt-12">
            <h3 className="mb-6">Recent Publications</h3>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <h4 className="mb-2">Privacy in the Age of AI: A Framework for Action</h4>
                <p className="text-muted-foreground mb-2">Chen, S., et al. (2025)</p>
                <p className="text-foreground/70">Journal of Data Ethics, Vol. 12, Issue 3</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <h4 className="mb-2">Measuring Digital Well-being: Validation of the DWB Scale</h4>
                <p className="text-muted-foreground mb-2">Johnson, M., Patel, P. (2025)</p>
                <p className="text-foreground/70">Computers in Human Behavior</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <h4 className="mb-2">Teen Social Media Use and Mental Health Outcomes</h4>
                <p className="text-muted-foreground mb-2">Kim, A., et al. (2024)</p>
                <p className="text-foreground/70">Developmental Psychology Quarterly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}