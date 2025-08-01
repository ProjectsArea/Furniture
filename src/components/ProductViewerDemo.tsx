import React, { useState } from 'react';
import ProductViewer360 from './ProductViewer360';
import ImageSequenceViewer from './ImageSequenceViewer';

const ProductViewerDemo: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<'3d' | '360'>('3d');

  // Sample 3D model URLs (replace with your actual furniture models)
  const sampleModels = [
    {
      name: "Luxury Sofa 3D Model",
      modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      description: "Interactive 3D model with AR support"
    },
    {
      name: "Dining Table 3D Model", 
      modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      description: "Full 360° rotation and zoom controls"
    }
  ];

  // Sample 360° image sequences
  const sampleImageSequences = [
    {
      name: "Velvet Sofa 360°",
      images: Array.from({ length: 36 }, (_, i) => 
        `https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&rotation=${i * 10}`
      ),
      description: "36-frame 360° image sequence"
    },
    {
      name: "Dining Table 360°",
      images: Array.from({ length: 24 }, (_, i) => 
        `https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&rotation=${i * 15}`
      ),
      description: "24-frame 360° image sequence"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          360° Product Viewer Demo
        </h1>
        <p className="text-gray-600 mb-6">
          Experience our furniture in immersive 3D and 360° views
        </p>
        
        {/* Demo Type Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedDemo('3d')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedDemo === '3d'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            3D Models
          </button>
          <button
            onClick={() => setSelectedDemo('360')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedDemo === '360'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            360° Images
          </button>
        </div>
      </div>

      {selectedDemo === '3d' ? (
        /* 3D Model Demos */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sampleModels.map((model, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {model.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {model.description}
                </p>
              </div>
              
              <ProductViewer360
                productId={index + 1}
                productName={model.name}
                modelUrl={model.modelUrl}
                className="aspect-square"
              />
              
              <div className="text-center text-sm text-gray-500">
                <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • 📱 Touch to interact</p>
                <p className="mt-1">📱 AR available on mobile devices</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* 360° Image Sequence Demos */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sampleImageSequences.map((sequence, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {sequence.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {sequence.description}
                </p>
              </div>
              
              <ImageSequenceViewer
                images={sequence.images}
                productName={sequence.name}
                className="aspect-square"
              />
              
              <div className="text-center text-sm text-gray-500">
                <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • 📱 Touch to interact</p>
                <p className="mt-1">⏯️ Auto-rotate available</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Features Overview */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Viewer Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">360° Rotation</h3>
            <p className="text-sm text-gray-600">
              Smooth rotation in all directions with mouse and touch controls
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Zoom Controls</h3>
            <p className="text-sm text-gray-600">
              Zoom in/out to examine fine details and textures
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⏯️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Auto-Rotate</h3>
            <p className="text-sm text-gray-600">
              Automatic rotation with play/pause controls
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">AR Support</h3>
            <p className="text-sm text-gray-600">
              Augmented Reality viewing on compatible mobile devices
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Notes */}
      <div className="mt-8 bg-blue-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Implementation Notes
        </h3>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>• <strong>3D Models:</strong> Use .glb or .gltf files for best compatibility</li>
          <li>• <strong>360° Images:</strong> Create sequences of 24-36 images for smooth rotation</li>
          <li>• <strong>Mobile Support:</strong> Touch gestures work seamlessly across devices</li>
          <li>• <strong>Performance:</strong> Optimized for smooth 60fps viewing experience</li>
          <li>• <strong>AR:</strong> Requires HTTPS and compatible mobile browsers</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductViewerDemo; 