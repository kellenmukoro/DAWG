import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Settings, Plus, Edit, Trash2 } from "lucide-react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  imageUrl: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
}

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  imageUrl: string;
}

interface Partner {
  id: string;
  name: string;
  type: string;
  description: string;
}

export function AdminPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editingType, setEditingType] = useState<string>("");

  const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-eb1fb471`;
  const headers = {
    'Authorization': `Bearer ${publicAnonKey}`,
    'Content-Type': 'application/json'
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [teamRes, blogRes, researchRes, partnersRes] = await Promise.all([
        fetch(`${API_URL}/team-members`, { headers }),
        fetch(`${API_URL}/blog-posts`, { headers }),
        fetch(`${API_URL}/research-projects`, { headers }),
        fetch(`${API_URL}/partners`, { headers })
      ]);

      const teamData = await teamRes.json();
      const blogData = await blogRes.json();
      const researchData = await researchRes.json();
      const partnersData = await partnersRes.json();

      setTeamMembers(teamData.data || []);
      setBlogPosts(blogData.data || []);
      setResearchProjects(researchData.data || []);
      setPartners(partnersData.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const initializeData = async () => {
    try {
      const res = await fetch(`${API_URL}/initialize-data`, {
        method: 'POST',
        headers
      });
      const data = await res.json();
      if (data.success) {
        alert('Data initialized successfully!');
        fetchAllData();
      }
    } catch (error) {
      console.error('Error initializing data:', error);
      alert('Error initializing data');
    }
  };

  const handleDelete = async (type: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const res = await fetch(`${API_URL}/${type}/${id}`, {
        method: 'DELETE',
        headers
      });
      const data = await res.json();
      if (data.success) {
        fetchAllData();
      }
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleSave = async (type: string, item: any) => {
    try {
      const url = item.id ? `${API_URL}/${type}/${item.id}` : `${API_URL}/${type}`;
      const method = item.id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(item)
      });

      const data = await res.json();
      if (data.success) {
        setEditingItem(null);
        setEditingType("");
        fetchAllData();
      }
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  const TeamMemberForm = ({ member }: { member: TeamMember | null }) => {
    const [formData, setFormData] = useState(member || {
      id: '',
      name: '',
      role: '',
      bio: '',
      expertise: [],
      imageUrl: ''
    });

    return (
      <div className="space-y-4">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          placeholder="Role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        />
        <Textarea
          placeholder="Bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
        <Input
          placeholder="Expertise (comma-separated)"
          value={Array.isArray(formData.expertise) ? formData.expertise.join(', ') : ''}
          onChange={(e) => setFormData({ ...formData, expertise: e.target.value.split(',').map(s => s.trim()) })}
        />
        <Input
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
        />
        <div className="flex gap-2">
          <Button onClick={() => handleSave('team-members', formData)}>Save</Button>
          <Button variant="outline" onClick={() => { setEditingItem(null); setEditingType(""); }}>Cancel</Button>
        </div>
      </div>
    );
  };

  const BlogPostForm = ({ post }: { post: BlogPost | null }) => {
    const [formData, setFormData] = useState(post || {
      id: '',
      title: '',
      excerpt: '',
      author: '',
      authorImage: '',
      date: new Date().toISOString().split('T')[0],
      readTime: ''
    });

    return (
      <div className="space-y-4">
        <Input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Textarea
          placeholder="Excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
        />
        <Input
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <Input
          placeholder="Author Image URL"
          value={formData.authorImage}
          onChange={(e) => setFormData({ ...formData, authorImage: e.target.value })}
        />
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <Input
          placeholder="Read Time (e.g., '5 min read')"
          value={formData.readTime}
          onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
        />
        <div className="flex gap-2">
          <Button onClick={() => handleSave('blog-posts', formData)}>Save</Button>
          <Button variant="outline" onClick={() => { setEditingItem(null); setEditingType(""); }}>Cancel</Button>
        </div>
      </div>
    );
  };

  const ResearchProjectForm = ({ project }: { project: ResearchProject | null }) => {
    const [formData, setFormData] = useState(project || {
      id: '',
      title: '',
      description: '',
      status: 'Active',
      tags: [],
      imageUrl: ''
    });

    return (
      <div className="space-y-4">
        <Input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Planning">Planning</option>
          <option value="Completed">Completed</option>
        </select>
        <Input
          placeholder="Tags (comma-separated)"
          value={Array.isArray(formData.tags) ? formData.tags.join(', ') : ''}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(s => s.trim()) })}
        />
        <Input
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
        />
        <div className="flex gap-2">
          <Button onClick={() => handleSave('research-projects', formData)}>Save</Button>
          <Button variant="outline" onClick={() => { setEditingItem(null); setEditingType(""); }}>Cancel</Button>
        </div>
      </div>
    );
  };

  const PartnerForm = ({ partner }: { partner: Partner | null }) => {
    const [formData, setFormData] = useState(partner || {
      id: '',
      name: '',
      type: '',
      description: ''
    });

    return (
      <div className="space-y-4">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          placeholder="Type (e.g., Academic Partner, Funding Partner)"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <div className="flex gap-2">
          <Button onClick={() => handleSave('partners', formData)}>Save</Button>
          <Button variant="outline" onClick={() => { setEditingItem(null); setEditingType(""); }}>Cancel</Button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading admin panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Settings className="h-10 w-10 text-primary" />
          <h2>Admin Panel</h2>
        </div>

        {teamMembers.length === 0 && (
          <Card className="mb-8 bg-primary/10 border-primary">
            <CardContent className="p-6">
              <p className="mb-4">It looks like the database is empty. Would you like to initialize it with default data?</p>
              <Button onClick={initializeData}>Initialize Database</Button>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="team" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="team">Team Members</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3>Manage Team Members</h3>
              <Button onClick={() => { setEditingItem(null); setEditingType("team"); }}>
                <Plus className="h-4 w-4 mr-2" /> Add Team Member
              </Button>
            </div>

            {editingType === "team" && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem ? 'Edit' : 'Add'} Team Member</CardTitle>
                </CardHeader>
                <CardContent>
                  <TeamMemberForm member={editingItem} />
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <Card key={member.id}>
                  <CardContent className="p-4 flex justify-between items-start">
                    <div>
                      <h4>{member.name}</h4>
                      <p className="text-muted-foreground">{member.role}</p>
                      <p className="text-foreground/70 mt-2">{member.bio}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => { setEditingItem(member); setEditingType("team"); }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete('team-members', member.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3>Manage Blog Posts</h3>
              <Button onClick={() => { setEditingItem(null); setEditingType("blog"); }}>
                <Plus className="h-4 w-4 mr-2" /> Add Blog Post
              </Button>
            </div>

            {editingType === "blog" && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem ? 'Edit' : 'Add'} Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <BlogPostForm post={editingItem} />
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-4 flex justify-between items-start">
                    <div>
                      <h4>{post.title}</h4>
                      <p className="text-muted-foreground">{post.author} • {post.date}</p>
                      <p className="text-foreground/70 mt-2">{post.excerpt}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => { setEditingItem(post); setEditingType("blog"); }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete('blog-posts', post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3>Manage Research Projects</h3>
              <Button onClick={() => { setEditingItem(null); setEditingType("research"); }}>
                <Plus className="h-4 w-4 mr-2" /> Add Project
              </Button>
            </div>

            {editingType === "research" && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem ? 'Edit' : 'Add'} Research Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResearchProjectForm project={editingItem} />
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {researchProjects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-4 flex justify-between items-start">
                    <div>
                      <h4>{project.title}</h4>
                      <p className="text-muted-foreground">Status: {project.status}</p>
                      <p className="text-foreground/70 mt-2">{project.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => { setEditingItem(project); setEditingType("research"); }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete('research-projects', project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3>Manage Partners</h3>
              <Button onClick={() => { setEditingItem(null); setEditingType("partner"); }}>
                <Plus className="h-4 w-4 mr-2" /> Add Partner
              </Button>
            </div>

            {editingType === "partner" && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem ? 'Edit' : 'Add'} Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <PartnerForm partner={editingItem} />
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {partners.map((partner) => (
                <Card key={partner.id}>
                  <CardContent className="p-4 flex justify-between items-start">
                    <div>
                      <h4>{partner.name}</h4>
                      <p className="text-muted-foreground">{partner.type}</p>
                      <p className="text-foreground/70 mt-2">{partner.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => { setEditingItem(partner); setEditingType("partner"); }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete('partners', partner.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
