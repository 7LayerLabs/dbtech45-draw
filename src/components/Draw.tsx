'use client';

import { useEffect, useState } from 'react';

export default function Draw() {
  const [ExcalidrawComponent, setExcalidrawComponent] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loadExcalidraw = async () => {
      try {
        if (typeof window !== 'undefined') {
          (window as any).EXCALIDRAW_ASSET_PATH = "/";
          
          const { Excalidraw } = await import('@excalidraw/excalidraw');
          setExcalidrawComponent(() => Excalidraw);
          setMounted(true);
        }
      } catch (error) {
        console.error('Failed to load Excalidraw:', error);
      }
    };

    loadExcalidraw();
  }, []);

  if (!mounted || !ExcalidrawComponent) {
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
      <ExcalidrawComponent
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