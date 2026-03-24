import ProductsWrapper from '@/components/common/products-wrapper';
import SectionTitle from '@/components/common/section-title';
import { getRecentlyLaunchedProducts } from '@/lib/products/product-select';
import { RocketIcon } from 'lucide-react';

export default async function HomeRecentlyLaunchedProjects() {
  const productsData = await getRecentlyLaunchedProducts();
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionTitle
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover The Latest Projects Just Launched By Our Community"
        />
        <ProductsWrapper products={productsData} />
      </div>
    </section>
  );
}
