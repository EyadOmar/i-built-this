import { db } from '@/db';
import { products } from '@/db/schema';
import { and, desc, eq, gt } from 'drizzle-orm';
import { connection } from 'next/server';

export async function getFeaturedProducts() {
  'use cache';
  const productsData = await db
    .select()
    .from(products)
    .where(and(eq(products.status, 'approved'), gt(products.voteCount, 300)))
    .orderBy(desc(products.voteCount))
    .limit(6);

  return productsData;
}

export async function getRecentlyLaunchedProducts() {
  await connection();
  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, 'approved'))
    .orderBy(desc(products.createdAt))
    .limit(6);

  return productsData;
}
