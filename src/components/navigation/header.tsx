import Logo from '@/components/common/logo';
import { CompassIcon, HomeIcon, LoaderIcon, SparklesIcon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import { Show, SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/navigation/mobile-menu';
import CustomUserButton from '@/components/navigation/custome-user-button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
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
        <div className="hidden md:flex items-center gap-3">
          <Suspense
            fallback={
              <div>
                <LoaderIcon className="size-4 animate-spin" />
              </div>
            }
          >
            <Show when={'signed-out'}>
              <SignInButton />
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </Show>

            <Show when={'signed-in'}>
              <Button asChild>
                <Link href="/submit">
                  <SparklesIcon className="size-4" />
                  Submit Project
                </Link>
              </Button>
              <CustomUserButton />
            </Show>
          </Suspense>
        </div>

        <MobileMenu
          userButton={
            <Suspense fallback={null}>
              <Show when={'signed-in'}>
                <CustomUserButton />
              </Show>
            </Suspense>
          }
          navLinks={
            <>
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-md"
              >
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/explore"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-md"
              >
                <CompassIcon className="size-4" />
                <span>Explore</span>
              </Link>
            </>
          }
          authButtons={
            <Suspense
              fallback={
                <div>
                  <LoaderIcon className="size-4 animate-spin" />
                </div>
              }
            >
              <Show when={'signed-out'}>
                <SignInButton />
                <SignUpButton>
                  <Button className="w-full">Sign Up</Button>
                </SignUpButton>
              </Show>

              <Show when={'signed-in'}>
                <Button asChild className="w-full">
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
              </Show>
            </Suspense>
          }
        />
      </div>
    </header>
  );
}
