'use client';

import { Excalidraw } from '@excalidraw/excalidraw';
import { useEffect, useState } from 'react';

export default function Draw() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set the asset path for self-hosted fonts
    if (typeof window !== 'undefined') {
      (window as any).EXCALIDRAW_ASSET_PATH = "/";
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading DBTech45 Draw...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <Excalidraw
        initialData={{
          appState: {
            viewBackgroundColor: "#ffffff",
          },
        }}
        UIOptions={{
          canvasActions: {
            saveToActiveFile: false,
            loadScene: false,
            export: {
              saveFileToDisk: true,
            },
            toggleTheme: true,
          },
        }}
        theme="light"
        langCode="en"
      />
    </div>
  );
}