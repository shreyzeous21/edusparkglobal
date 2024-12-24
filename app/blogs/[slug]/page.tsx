import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { notFound } from 'next/navigation'

function generateSlug(title: string, id: number): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
}

async function fetchBlogPosts() {
  try {
    const response = await fetch('https://dummyjson.com/posts')
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    const data = await response.json()
    return data.posts.map((post: any) => ({
      ...post,
      slug: generateSlug(post.title, post.id)
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

async function fetchBlogPost(slug: string) {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    const data = await response.json();
    
    // Dummy images array for fallback
    const DUMMY_IMAGES = [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    ];

    const post = data.posts.find((p: any) => {
      const generatedSlug = `${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${p.id}`;
      return generatedSlug === slug;
    });

    return post ? {
      ...post,
      image: DUMMY_IMAGES[Math.floor(Math.random() * DUMMY_IMAGES.length)]
    } : null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug)
  
  return {
    title: post ? `${post.title} - EduSpark Global` : 'Blog Post',
    description: post ? post.body.substring(0, 160) : 'Blog post details'
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await fetchBlogPost(params.slug);

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Blog Image */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

          {/* Tags */}
          <div className="flex items-center space-x-2 mb-6">
            <Tag className="w-5 h-5 text-muted-foreground" />
            <div className="flex space-x-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Blog Body */}
          <div className="prose max-w-none">
            <p>{post.body}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
