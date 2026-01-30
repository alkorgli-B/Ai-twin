import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Twin - Senku Project',
  description: 'Your Digital Intelligence Companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
