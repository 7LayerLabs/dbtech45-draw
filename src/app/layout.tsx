import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DBTech45 Draw - Virtual Whiteboard",
  description: "Create beautiful hand-drawn diagrams, wireframes, and sketches with DBTech45 Draw - our virtual whiteboard tool.",
  keywords: ["drawing", "whiteboard", "diagrams", "wireframes", "excalidraw", "dbtech45"],
  authors: [{ name: "DBTech45" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.EXCALIDRAW_ASSET_PATH = "/";`,
          }}
        />
      </head>
      <body className={`${inter.className} h-full overflow-hidden`}>
        <div className="h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}