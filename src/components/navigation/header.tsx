import Logo from '@/components/common/logo';
import { CompassIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
          >
            <HomeIcon className="size-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/explore"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
          >
            <CompassIcon className="size-4" />
            <span>Explore</span>
          </Link>
        </nav>
        <div className="w-20"></div>
      </div>
    </header>
  );
}
