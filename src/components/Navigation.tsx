import { Button } from "./ui/button";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Team", path: "team" },
    { name: "Research", path: "research" },
    { name: "Blog", path: "blog" },
    { name: "Partners", path: "partners" }
  ];

  return (
    <header className="border-b sticky top-0 bg-background z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate("home")}
            className="flex flex-col hover:opacity-80 transition-opacity"
          >
            <h1 className="text-primary">DAWG</h1>
            <p className="text-muted-foreground">Data Well-being Group</p>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`transition-colors ${
                  currentPage === item.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-colors ${
                  currentPage === item.path
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button className="bg-primary hover:bg-primary/90 mt-2">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
