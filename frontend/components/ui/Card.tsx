import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  style?: React.CSSProperties;
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
  style,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden',
        variantStyles[variant],
        hover && 'card-hover',
        className
      )}
      style={style}
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

