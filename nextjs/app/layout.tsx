import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beautification — The Beauty Studio · Dhaka',
  description:
    'Bespoke bridal, hair artistry, and couture glamour transformations at Beautification The Beauty Studio in Mohammadpur, Dhaka.',
  openGraph: {
    title: 'Beautification — The Beauty Studio · Dhaka',
    description:
      'Bespoke bridal, hair artistry, and couture glamour transformations at Beautification The Beauty Studio in Mohammadpur, Dhaka.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBF8F4] text-[#211D1D] selection:bg-[#6F214F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
