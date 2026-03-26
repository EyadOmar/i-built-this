import HomeFeaturedProducts from '@/components/pages/home/home-featured-products';
import HomeHero from '@/components/pages/home/home-hero';
import HomeRecentlyLaunchedProjects from '@/components/pages/home/home-recently-launched-projects';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFeaturedProducts />
      <Suspense fallback={<div>Loading...</div>}>
        <HomeRecentlyLaunchedProjects />
      </Suspense>
    </main>
  );
}
