import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2 } from 'lucide-react';
import Card, { CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

// Generate placeholder image for case study
function getPlaceholderImage(title: string, index: number = 0): string {
  const colors = ['0F172A', '2563EB', '34D399', '6366F1', '8B5CF6'];
  const color = colors[index % colors.length];
  return `https://placehold.co/800x400/${color}/FFFFFF?text=${encodeURIComponent(title.substring(0, 15))}`;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const imageUrl = caseStudy.coverImage?.startsWith('http') 
    ? caseStudy.coverImage 
    : getPlaceholderImage(caseStudy.title, parseInt(caseStudy.id) || 0);

  return (
    <Card variant="bordered" hover>
      <Link href={`/case-studies/${caseStudy.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10">
          <Image
            src={imageUrl}
            alt={caseStudy.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-muted mb-4">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium">{caseStudy.client}</span>
        </div>

        <Link href={`/case-studies/${caseStudy.slug}`}>
          <h3 className="text-xl font-semibold text-secondary mb-3 hover:text-primary transition-colors line-clamp-2">
            {caseStudy.title}
          </h3>
        </Link>

        <p className="text-muted mb-4 line-clamp-3">{caseStudy.challenge}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.techUsed.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
          {caseStudy.techUsed.length > 3 && (
            <Badge variant="muted">+{caseStudy.techUsed.length - 3}</Badge>
          )}
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-sm text-muted mb-2">Impact:</p>
          <ul className="space-y-1">
            {caseStudy.impact.slice(0, 2).map((item, index) => (
              <li key={index} className="text-sm text-accent font-medium">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center text-primary font-medium mt-4 group"
        >
          View Case Study
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}

