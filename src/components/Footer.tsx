import { Separator } from "./ui/separator";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-background mb-4">DAWG</h3>
            <p className="text-background/70">
              Data Well-being Group - Advancing ethical data science research
            </p>
          </div>
          <div>
            <h4 className="text-background mb-4">Research</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <button 
                  onClick={() => onNavigate("research")} 
                  className="hover:text-background transition-colors"
                >
                  Publications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("research")} 
                  className="hover:text-background transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button className="hover:text-background transition-colors">
                  Datasets
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-background mb-4">Community</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <button 
                  onClick={() => onNavigate("blog")} 
                  className="hover:text-background transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button className="hover:text-background transition-colors">
                  Events
                </button>
              </li>
              <li>
                <button className="hover:text-background transition-colors">
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-background mb-4">Connect</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <button className="hover:text-background transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("team")} 
                  className="hover:text-background transition-colors"
                >
                  Join the Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("partners")} 
                  className="hover:text-background transition-colors"
                >
                  Collaborate
                </button>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-background/30" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70">
          <p>&copy; 2025 Data Well-being Group. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-background transition-colors">Privacy Policy</button>
            <button className="hover:text-background transition-colors">Terms of Use</button>
            <button 
              onClick={() => onNavigate("admin")} 
              className="hover:text-background transition-colors opacity-50 hover:opacity-100"
              title="Admin Panel"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}