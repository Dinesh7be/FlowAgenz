import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
  muted: 'bg-gray-100 text-muted',
};

export default function Badge({
  children,
  variant = 'primary',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

