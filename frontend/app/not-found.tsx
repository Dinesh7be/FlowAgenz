import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Page Not Found
        </h2>
        <p className="text-muted mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

