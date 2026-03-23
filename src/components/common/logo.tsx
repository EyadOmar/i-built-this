import { SparklesIcon } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold inline-flex items-center gap-2 group"
    >
      <div className="bg-primary text-primary-foreground flex items-center justify-center rounded-lg size-8">
        <SparklesIcon className="size-4" />
      </div>
      <div>
        i<span className="text-primary">Built</span>This
      </div>
    </Link>
  );
}
