import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import { ClerkProvider } from '@clerk/nextjs';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'iBuiltThis | Real Projects, Real Feedback',
    template: '%s | iBuiltThis',
  },
  description:
    'iBuiltThis is a platform for sharing your own projects with the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${outfit.className} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
