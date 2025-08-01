import React, { useRef, useState } from 'react';

interface SimpleImageSpinProps {
  image: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

const viewAngles = {
  front: { y: 0, x: 0 },
  back: { y: 180, x: 0 },
  side: { y: 90, x: 0 },
  top: { y: 0, x: 90 },
};

const SimpleImageSpin: React.FC<SimpleImageSpinProps> = ({
  image,
  alt = '',
  width = 400,
  height = 400,
}) => {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - lastX.current;
    const deltaY = e.clientY - lastY.current;
    setRotationY((r) => r + deltaX);
    setRotationX((r) => Math.max(Math.min(r - deltaY, 90), -90)); // Clamp X rotation
    lastX.current = e.clientX;
    lastY.current = e.clientY;
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    lastX.current = e.touches[0].clientX;
    lastY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const deltaX = e.touches[0].clientX - lastX.current;
    const deltaY = e.touches[0].clientY - lastY.current;
    setRotationY((r) => r + deltaX);
    setRotationX((r) => Math.max(Math.min(r - deltaY, 90), -90));
    lastX.current = e.touches[0].clientX;
    lastY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    dragging.current = false;
  };

  // Preset view buttons
  const setView = (view: keyof typeof viewAngles) => {
    setRotationY(viewAngles[view].y);
    setRotationX(viewAngles[view].x);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 12 }}>
        <button onClick={() => setView('front')} className="px-3 py-1 bg-gray-200 rounded">Front</button>
        <button onClick={() => setView('back')} className="px-3 py-1 bg-gray-200 rounded">Back</button>
        <button onClick={() => setView('side')} className="px-3 py-1 bg-gray-200 rounded">Side</button>
        <button onClick={() => setView('top')} className="px-3 py-1 bg-gray-200 rounded">Top</button>
      </div>
      <div
        style={{
          width,
          height,
          perspective: 1000,
          userSelect: 'none',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f9f9f9',
          borderRadius: 16,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={image}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
            transition: dragging.current ? 'none' : 'transform 0.2s',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default SimpleImageSpin;