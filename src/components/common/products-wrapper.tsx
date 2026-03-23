import { ProductType } from '@/types';
import { CalendarIcon } from 'lucide-react';
import ProductCard from './product-card';

export default function ProductsWrapper({
  products,
}: {
  products: ProductType[] | undefined | null;
}) {
  return (
    <div className="mt-6 sm:mt-8">
      {products && !!products.length ? (
        <div className="grid-wrapper ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border rounded-md min-h-50 flex flex-col gap-2 items-center justify-center">
          <CalendarIcon className="size-8" />
          <p>No Products Launched Yet</p>
        </div>
      )}
    </div>
  );
}
