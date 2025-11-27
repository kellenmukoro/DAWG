import { BlogPostCard } from "../components/BlogPostCard";
import { Button } from "../components/ui/button";
import { Lightbulb, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-eb1fb471/blog-posts`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );
      const data = await res.json();
      if (data.success) {
        setBlogPosts(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-accent/30 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-10 w-10 text-primary" />
              <h2>Insights & Ideas</h2>
            </div>
            <p className="text-foreground/80 mb-6">
              Our team members share thoughts, findings, and perspectives on data well-being. 
              These posts are open for anyone to explore and engage with.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search blog posts..." 
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h3>Latest Posts</h3>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Subscribe to Updates
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.title} {...post} />
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h3 className="mb-6">Browse by Topic</h3>
            <div className="flex flex-wrap gap-3">
              {["Privacy", "AI Ethics", "Mental Health", "Policy", "Methodology", "Digital Rights", "Social Media", "Data Governance"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-colors border border-secondary/30"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-border text-center">
            <h3 className="mb-4">Stay Updated</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest blog posts, research updates, 
              and insights directly in your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}