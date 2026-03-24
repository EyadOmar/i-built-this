import ProductsWrapper from '@/components/common/products-wrapper';
import SectionTitle from '@/components/common/section-title';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/lib/products/product-select';
import { ArrowUpRightIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';

export default async function HomeFeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();
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
