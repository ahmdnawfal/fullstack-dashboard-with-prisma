import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
