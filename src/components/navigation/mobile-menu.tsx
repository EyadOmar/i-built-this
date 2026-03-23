'use client';

import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  navLinks: React.ReactNode;
  authButtons: React.ReactNode;
  userButton?: React.ReactNode;
}

export default function MobileMenu({ navLinks, authButtons, userButton }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      {userButton}
      <Button
        variant="ghost"
        size="icon"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
      </Button>

      <div
        id="mobile-menu"
        className={cn(
          'absolute top-16 left-0 right-0 z-40 border-b bg-background backdrop-blur-sm supports-backdrop-filter:bg-background/90 overflow-hidden transition-[max-height,opacity] duration-200 ease-in-out',
          open
            ? 'max-h-96 opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none',
        )}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) {
            setOpen(false);
          }
        }}
      >
        <div className="wrapper py-4 flex flex-col gap-1">
          {navLinks}
          <div className="border-t my-2" />
          <div className="flex flex-col gap-2 pt-2">{authButtons}</div>
        </div>
      </div>
    </div>
  );
}
