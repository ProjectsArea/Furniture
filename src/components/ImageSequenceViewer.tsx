import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Play, Pause, Maximize, Minimize } from 'lucide-react';

interface ImageSequenceViewerProps {
  images: string[];
  productName: string;
  className?: string;
}

const ImageSequenceViewer: React.FC<ImageSequenceViewerProps> = ({
  images,
  productName,
  className = ''
}) => {
  // If only one image, simulate 24 frames
  const isSingleImage = images.length === 1;
  const totalFrames = isSingleImage ? 24 : images.length;
  const frameAngle = 360 / totalFrames;

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartFrame, setDragStartFrame] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const autoRotateInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation effect
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateInterval.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % totalFrames);
      }, 100); // 10 FPS for smooth rotation
    } else {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current);
        autoRotateInterval.current = null;
      }
    }

    return () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current);
      }
    };
  }, [isAutoRotating, totalFrames]);

  // Mouse/Touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartFrame(currentFrame);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStartX;
    const frameDelta = Math.round((deltaX / 5) * (totalFrames / 360)); // 5px = 1 degree
    const newFrame = (dragStartFrame + frameDelta + totalFrames) % totalFrames;
    setCurrentFrame(newFrame);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartFrame(currentFrame);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - dragStartX;
    const frameDelta = Math.round((deltaX / 5) * (totalFrames / 360));
    const newFrame = (dragStartFrame + frameDelta + totalFrames) % totalFrames;
    setCurrentFrame(newFrame);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 0.2, 0.5));
  };

  // Auto-rotation toggle
  const toggleAutoRotation = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  // Reset view
  const resetView = () => {
    setCurrentFrame(0);
    setZoomLevel(1);
    setIsAutoRotating(false);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Prevent context menu on right click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      ref={containerRef}
      className={`relative bg-gray-100 rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: '400px' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onContextMenu={handleContextMenu}
    >
      {/* Image Display */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          ref={imageRef}
          src={images[0]}
          alt={`${productName} - View ${currentFrame + 1}`}
          className="transition-all duration-200"
          style={{
            transform: isSingleImage
              ? `scale(${zoomLevel}) rotateY(${currentFrame * frameAngle}deg)`
              : `scale(${zoomLevel})`,
            cursor: isDragging ? 'grabbing' : 'grab',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            perspective: isSingleImage ? '1000px' : undefined,
            boxShadow: isSingleImage ? '0 4px 32px 0 rgba(0,0,0,0.08)' : undefined
          }}
        />
        {/* Loading placeholder if image fails */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <p className="text-gray-600 mb-2">360° View</p>
            <p className="text-sm text-gray-500">Frame {currentFrame + 1} of {totalFrames}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
        <div 
          className="h-full bg-amber-600 transition-all duration-200"
          style={{ width: `${((currentFrame + 1) / totalFrames) * 100}%` }}
        />
      </div>

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

      {/* Frame Counter */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
        <p>{currentFrame + 1} / {totalFrames}</p>
      </div>
    </div>
  );
};

export default ImageSequenceViewer; 