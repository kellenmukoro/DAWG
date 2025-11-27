import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Handshake, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function PartnersPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-eb1fb471/partners`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );
      const data = await res.json();
      if (data.success) {
        setPartners(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading partners...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="h-10 w-10 text-primary" />
              <h2>Partners & Collaborators</h2>
            </div>
            <p className="text-foreground/80">
              We collaborate with organizations across academia, industry, and civil society to maximize 
              the impact of our research. Together, we're building a more ethical and human-centered 
              data ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner) => (
              <Card key={partner.name} className="hover:shadow-lg transition-shadow border-border">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2">{partner.name}</h3>
                  <p className="text-primary mb-3">{partner.type}</p>
                  <p className="text-foreground/70">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mt-16 bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg p-8 border border-border">
            <h3 className="mb-6 text-center">Why Partner With DAWG</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">🔬</span>
                </div>
                <h4 className="mb-2">Rigorous Research</h4>
                <p className="text-foreground/70">
                  Access to cutting-edge research methodologies and evidence-based insights
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary">🌐</span>
                </div>
                <h4 className="mb-2">Global Network</h4>
                <p className="text-foreground/70">
                  Connect with leading experts and organizations worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">⚡</span>
                </div>
                <h4 className="mb-2">Real Impact</h4>
                <p className="text-foreground/70">
                  Collaborate on projects that create meaningful change in the world
                </p>
              </div>
            </div>
          </div>

          {/* Collaboration Types */}
          <div className="mt-16">
            <h3 className="mb-8">How We Collaborate</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="mb-3">Research Partnerships</h4>
                <p className="text-foreground/70 mb-4">
                  Joint research projects, data sharing agreements, and co-authored publications 
                  that advance the field of data well-being.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Collaborative research projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Data and resource sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Joint publications and grants</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="mb-3">Advisory Services</h4>
                <p className="text-foreground/70 mb-4">
                  Expert consultation on data ethics, privacy, and well-being for organizations 
                  seeking to improve their practices.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>Ethics audits and assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>Policy development support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>Training and workshops</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="mb-3">Funding Partnerships</h4>
                <p className="text-foreground/70 mb-4">
                  Support for specific research initiatives that align with your organization's 
                  mission and values.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Project-specific grants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>General operating support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Endowments and fellowships</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="mb-3">Community Engagement</h4>
                <p className="text-foreground/70 mb-4">
                  Participatory research and co-design with communities to ensure research 
                  meets real-world needs.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>Co-design workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>Community advisory boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <span>Public engagement events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-12 border border-border text-center">
            <h3 className="mb-4">Interested in Collaborating?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              We're always open to new partnerships that align with our mission. 
              Let's explore how we can work together to advance data well-being.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}