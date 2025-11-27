import { TeamMemberCard } from "../components/TeamMemberCard";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Users } from "lucide-react";
import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-eb1fb471/team-members`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );
      const data = await res.json();
      if (data.success) {
        setTeamMembers(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading team members...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-10 w-10 text-primary" />
              <h2>Our Team</h2>
            </div>
            <p className="text-foreground/80">
              A diverse group of researchers, data scientists, and ethicists dedicated to 
              advancing data well-being. Our interdisciplinary team brings together expertise 
              from computer science, psychology, public policy, and design.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
            {/* Placeholder for future team members */}
            <Card className="border-2 border-dashed border-secondary/40 flex items-center justify-center min-h-[400px] hover:border-primary/60 transition-colors bg-muted/30">
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-foreground/70 mb-2">Join Our Team</h3>
                <p className="text-muted-foreground mb-4">We're always looking for talented researchers</p>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  View Opportunities
                </Button>
              </div>
            </Card>
          </div>

          {/* Team Culture */}
          <div className="mt-16 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-lg p-8 border border-border">
            <h3 className="mb-6 text-center">Why Work With Us</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">💡</span>
                </div>
                <h4 className="mb-2">Innovative Research</h4>
                <p className="text-foreground/70">Work on cutting-edge projects at the forefront of data ethics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary">🌍</span>
                </div>
                <h4 className="mb-2">Global Impact</h4>
                <p className="text-foreground/70">Shape policies and practices that affect millions worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">🤝</span>
                </div>
                <h4 className="mb-2">Collaborative Culture</h4>
                <p className="text-foreground/70">Join a supportive, interdisciplinary community of scholars</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}