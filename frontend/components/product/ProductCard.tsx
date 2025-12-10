import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card variant="bordered" hover>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          {product.name}
        </h3>

        <p className="text-muted mb-4 line-clamp-3">{product.overview}</p>

        <div className="mb-4">
          <p className="text-sm font-medium text-secondary mb-2">Key Features:</p>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted flex items-start gap-2">
                <span className="text-accent">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.techUsed.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-primary font-medium group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>

          {product.demoUrl && (
            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted hover:text-accent font-medium"
            >
              Demo
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

