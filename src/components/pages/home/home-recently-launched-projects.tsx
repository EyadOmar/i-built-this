import ProductsWrapper from '@/components/common/products-wrapper';
import SectionTitle from '@/components/common/section-title';
import { RocketIcon } from 'lucide-react';

const recentlyLaunchedProjects = [
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

export default function HomeRecentlyLaunchedProjects() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionTitle
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover The Latest Projects Just Launched By Our Community"
        />
        <ProductsWrapper products={recentlyLaunchedProjects} />
      </div>
    </section>
  );
}
