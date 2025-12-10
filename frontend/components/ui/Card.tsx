import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  bordered: 'bg-white border border-border',
};

export default function Card({
  children,
  className,
  variant = 'default',
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden',
        variantStyles[variant],
        hover && 'card-hover',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('p-6 pt-0 flex items-center gap-4', className)}>
      {children}
    </div>
  );
}

