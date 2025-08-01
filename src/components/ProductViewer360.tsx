import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Play, Pause, Maximize, Minimize } from 'lucide-react';

interface ProductViewer360Props {
  productId: number;
  productName: string;
  // For 3D models
  modelUrl?: string;
  // For 360° image sequences
  imageSequence?: string[];
  // Fallback single image
  fallbackImage?: string;
  className?: string;
}

const ProductViewer360: React.FC<ProductViewer360Props> = ({
  productId,
  productName,
  modelUrl,
  imageSequence,
  fallbackImage,
  className = ''
}) => {
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const viewerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle zoom controls
  const handleZoomIn = () => {
    if (viewerRef.current) {
      const newZoom = Math.min(zoomLevel + 0.2, 3);
      setZoomLevel(newZoom);
      viewerRef.current.cameraOrbit = `${viewerRef.current.cameraOrbit.split(' ')[0]} ${viewerRef.current.cameraOrbit.split(' ')[1]} ${newZoom}`;
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      const newZoom = Math.max(zoomLevel - 0.2, 0.5);
      setZoomLevel(newZoom);
      viewerRef.current.cameraOrbit = `${viewerRef.current.cameraOrbit.split(' ')[0]} ${viewerRef.current.cameraOrbit.split(' ')[1]} ${newZoom}`;
    }
  };

  // Handle auto-rotation toggle
  const toggleAutoRotation = () => {
    if (viewerRef.current) {
      setIsAutoRotating(!isAutoRotating);
      viewerRef.current.autoRotate = !isAutoRotating;
    }
  };

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Reset view
  const resetView = () => {
    if (viewerRef.current) {
      viewerRef.current.cameraOrbit = '0deg 75deg 1.5m';
      setZoomLevel(1);
      setIsAutoRotating(false);
      viewerRef.current.autoRotate = false;
    }
  };

  // Handle model viewer events
  const handleModelViewerLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleModelViewerError = () => {
    setIsLoading(false);
    setError('Failed to load 3D model. Please try refreshing the page.');
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Generate 360° image sequence if not provided
  const generateImageSequence = () => {
    if (imageSequence) return imageSequence;
    
    // Generate a sequence of 36 images (10-degree intervals) for demo
    const baseUrl = fallbackImage || `https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800`;
    return Array.from({ length: 36 }, (_, i) => 
      `${baseUrl}&rotation=${i * 10}`
    );
  };

  const sequence = generateImageSequence();

  return (
    <div 
      ref={containerRef}
      className={`relative bg-gray-100 rounded-2xl overflow-hidden ${className}`}
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="text-gray-600 font-medium">Loading 3D Model...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center p-6">
            <p className="text-red-600 font-medium mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* 3D Model Viewer */}
      {modelUrl ? (
        <model-viewer
          ref={viewerRef}
          src={modelUrl}
          alt={productName}
          camera-controls
          auto-rotate={isAutoRotating}
          camera-orbit="0deg 75deg 1.5m"
          min-camera-orbit="auto auto 0.5m"
          max-camera-orbit="auto auto 3m"
          field-of-view="30deg"
          shadow-intensity="1"
          environment-image="neutral"
          exposure="1"
          shadow-softness="0.5"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-target="0m 0m 0m"
          onLoad={handleModelViewerLoad}
          onError={handleModelViewerError}
          className="w-full h-full"
          style={{ minHeight: '400px' }}
        >
          {/* AR Button */}
          <button slot="ar-button" className="absolute bottom-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
            View in AR
          </button>
        </model-viewer>
      ) : (
        /* 360° Image Sequence Viewer */
        <div className="relative w-full h-full" style={{ minHeight: '400px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">360° Image Sequence</p>
              <p className="text-sm text-gray-500">Drag to rotate • Scroll to zoom</p>
            </div>
          </div>
        </div>
      )}

      {/* Control Panel */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {/* Zoom Controls */}
        <div className="flex flex-col gap-1">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4 text-gray-700" />
          </button>
        </div>

        {/* Rotation Controls */}
        <div className="flex flex-col gap-1">
          <button
            onClick={toggleAutoRotation}
            className={`p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              isAutoRotating 
                ? 'bg-amber-600 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-white'
            }`}
            title={isAutoRotating ? "Stop Auto-Rotation" : "Start Auto-Rotation"}
          >
            {isAutoRotating ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={resetView}
            className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            title="Reset View"
          >
            <RotateCcw className="h-4 w-4 text-gray-700" />
          </button>
        </div>

        {/* Fullscreen Control */}
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <Minimize className="h-4 w-4 text-gray-700" />
          ) : (
            <Maximize className="h-4 w-4 text-gray-700" />
          )}
        </button>
      </div>

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
        <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • 📱 Touch to interact</p>
      </div>
    </div>
  );
};

export default ProductViewer360; 