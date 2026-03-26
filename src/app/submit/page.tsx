import SectionTitle from '@/components/common/section-title';
import ProductSubmitForm from '@/components/pages/submit/products-submit-form';
import { SparklesIcon } from 'lucide-react';

export default function SubmitPage() {
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-2xl px-4 mx-auto">
        <div className="mb-12">
          <SectionTitle
            title="Submit Your Product"
            icon={SparklesIcon}
            description="Share your creation with the community. Your submission will be reviewed before going live."
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}
