import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { formatDate, calculateReadingTime } from '@/lib/utils';
import type { Blog } from '@/types';

interface BlogCardProps {
  blog: Blog;
}

// Generate placeholder image based on blog title
function getPlaceholderImage(title: string, index: number = 0): string {
  const colors = ['2563EB', '0F172A', '34D399', '6366F1', '8B5CF6'];
  const color = colors[index % colors.length];
  return `https://placehold.co/800x400/${color}/FFFFFF?text=${encodeURIComponent(title.substring(0, 20))}`;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const readingTime = calculateReadingTime(blog.content);
  const imageUrl = blog.coverImage?.startsWith('http') 
    ? blog.coverImage 
    : getPlaceholderImage(blog.title, parseInt(blog.id) || 0);

  return (
    <Card variant="bordered" hover>
      <Link href={`/blogs/${blog.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <Image
            src={imageUrl}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="primary">
              {tag}
            </Badge>
          ))}
        </div>

        <Link href={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-semibold text-secondary mb-3 hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>

        <p className="text-muted mb-4 line-clamp-2">{blog.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(blog.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </span>
          </div>
        </div>

        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center text-primary font-medium mt-4 group"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}

