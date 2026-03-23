import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  SparkleIcon,
  ArrowRightIcon,
  RocketIcon,
  Users2Icon,
  EyeIcon,
} from 'lucide-react';
import StatsCard from '@/components/common/stats-card';

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper flex flex-col items-center justify-center py-16 lg:py-24 text-center">
        <HeroBadge />
        <h1 className="text-5xl mb-6 sm:text-6xl lg:text-7xl max-w-5xl font-bold tracking-tight text-center">
          Share What You&apos;ve built, Discover What&apos;s Launching
        </h1>
        <p className="text-center text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed text-muted-foreground">
          A community platform for creators to showcase their apps, AI tools,
          SaaS products, and creative projects. Authentic launches, real
          builders, genuine feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild size="lg" className="text-base px-8 shadow-lg">
            <Link href="/submit">
              <SparkleIcon className="size-5" />
              Share Your Project
            </Link>
          </Button>
          <Button
            variant={'secondary'}
            asChild
            size="lg"
            className="text-base px-8 shadow-lg"
          >
            <Link href="/explore">
              Explore Projects
              <ArrowRightIcon className="size-5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
          <StatsCard title="Projects Shared" value="2.5k+" icon={RocketIcon} />
          <StatsCard title="Active Creators" value="10k+" icon={Users2Icon} />
          <StatsCard title="Monthly Visitors" value="50k+" icon={EyeIcon} />
        </div>
      </div>
    </section>
  );
};

const HeroBadge = () => {
  return (
    <Badge
      variant={'outline'}
      className="px-4 py-2 h-auto mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex size-2 me-1">
        <span className="bg-primary animate-ping absolute opacity-75 size-full rounded-full"></span>
        <span className="bg-primary block size-full rounded-full"></span>
      </span>
      <span className="text-muted-foreground">
        Join Thousands of creators sharing their work
      </span>
    </Badge>
  );
};

export default HomeHero;
