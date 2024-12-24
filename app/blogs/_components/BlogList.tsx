import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Tag, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Blog {
  id: number;
  title: string;
  body: string;
  tags: string[];
  slug: string;
}

// Enhanced dummy images with more variety
const DUMMY_IMAGES = [
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5ade38b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
];

function generateSlug(title: string, id: number): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${id}`;
}

async function fetchBlogPosts() {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    const data = await response.json();
    return data.posts.map((post: Blog) => ({
      ...post,
      slug: generateSlug(post.title, post.id),
      image: DUMMY_IMAGES[Math.floor(Math.random() * DUMMY_IMAGES.length)],
      readTime: Math.ceil(post.body.split(' ').length / 200) // Estimate read time
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogList() {
  const blogs = await fetchBlogPosts();

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-primary/20 rounded-xl h-full"
          >
            {/* Blog Image with Overlay */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                <Link href={`/blogs/${blog.slug}`}>
                  {blog.title}
                </Link>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col">
              {/* Tags */}
              <div className="flex items-center space-x-2 mb-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <div className="flex space-x-1">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Blog Excerpt */}
              <p className="text-muted-foreground text-sm line-clamp-3 mb-3 flex-grow">
                {blog.body.substring(0, 150)}...
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-0">
              <div className="text-xs text-muted-foreground">
                {blog.readTime} min read
              </div>

              <Link 
                href={`/blogs/${blog.slug}`} 
                className="group/link"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80 group-hover/link:translate-x-1 transition-all"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination or Load More */}
      {blogs.length > 0 && (
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="group hover:bg-primary hover:text-white transition-all"
          >
            Load More Posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  );
}
