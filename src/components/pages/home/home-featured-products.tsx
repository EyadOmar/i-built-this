import ProductsWrapper from '@/components/common/products-wrapper';
import SectionTitle from '@/components/common/section-title';
import { Button } from '@/components/ui/button';
import { ArrowUpRightIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: 'Project Name',
    slug: 'project-name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    link: 'https://www.google.com',
    voteCount: 100,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Project Name 2',
    slug: 'project-name-2',
    description:
      'Lorem2 ipsum2 dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    tags: ['NestJS', 'Next.js', 'TailwindCSS'],
    link: 'https://www.google.com',
    voteCount: 100,
    isFeatured: true,
  },
];

export default function HomeFeaturedProducts() {
  return (
    <section className="bg-muted/20 py-20 ">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <SectionTitle
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="max-sm:hidden">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <ProductsWrapper products={featuredProducts} />
      </div>
    </section>
  );
}
