import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaDigital – Award-Winning Digital Marketing Agency",
  description: "NexaDigital helps businesses grow online with SEO, PPC, social media marketing, content marketing, and full-service digital marketing solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
