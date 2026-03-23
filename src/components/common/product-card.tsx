import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProductType } from '@/types';

export default function ProductCard({ product }: { product: ProductType }) {
  const hasVoted = false; // Replace with actual voting logic
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-50">
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.voteCount > 100 && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            {/** Voting buttons */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  'size-8 ',
                  hasVoted
                    ? 'bg-primary/10 hover:bg-primary/20 text-primary'
                    : 'hover:bg-primary/10 hover:text-primary',
                )}
              >
                <ChevronUpIcon className="size-5" />
              </Button>
              <span className="text-sm font-semibold transition-colors text-foreground">
                10
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  'size-8 text-primary ',
                  hasVoted
                    ? 'hover:text-destructive'
                    : 'opacity-50 cursor-not-allowed',
                )}
              >
                <ChevronDownIcon className="size-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
