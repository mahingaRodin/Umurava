import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';

const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "Umurava",
  description: "Built using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
