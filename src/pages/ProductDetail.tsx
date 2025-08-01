import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Star, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import ProductViewer360 from '../components/ProductViewer360';
import ImageSequenceViewer from '../components/ImageSequenceViewer';
import SimpleImageSpin from '../components/SimpleImageSpin';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || ''));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [viewMode, setViewMode] = useState<'spin' | '360' | 'images'>('spin');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Generate multiple images for demo (in real app, these would come from API)
  const productImages = [
    product.image,
    product.image.replace('w=600', 'w=800'),
    product.image.replace('auto=compress', 'auto=enhance'),
    product.image.replace('cs=tinysrgb', 'cs=srgb')
  ];

  // Generate 360° image sequence for demo
  const generate360Sequence = () => {
    const baseUrl = product.image;
    return Array.from({ length: 36 }, (_, i) => 
      `${baseUrl}?rotation=${i * 10}&w=800`
    );
  };

  const imageSequence = product.imageSequence || generate360Sequence();

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handle360Rotation = () => {
    setRotation(rotation + 90);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-6">
            {/* View Mode Toggle */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setViewMode('spin')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'spin'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Spin
              </button>
              <button
                onClick={() => setViewMode('360')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === '360'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                360° View
              </button>
              <button
                onClick={() => setViewMode('images')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'images'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Gallery
              </button>
            </div>

            {/* Spin, 360° Viewer or Image Gallery */}
            {viewMode === 'spin' ? (
              <SimpleImageSpin image={product.image} width={400} height={400} />
            ) : viewMode === '360' ? (
              <div className="space-y-4">
                {/* 3D Model Viewer (if available) */}
                {product.modelUrl ? (
                  <ProductViewer360
                    productId={product.id}
                    productName={product.name}
                    modelUrl={product.modelUrl}
                    className="aspect-square"
                  />
                ) : (
                  /* 360° Image Sequence Viewer */
                  <ImageSequenceViewer
                    images={imageSequence}
                    productName={product.name}
                    className="aspect-square"
                  />
                )}
              </div>
            ) : (
              /* Traditional Image Gallery */
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
                
                {/* 360° Rotation Button */}
                <button
                  onClick={handle360Rotation}
                  className="absolute top-4 right-4 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 group-hover:scale-110"
                >
                  <RotateCcw className="h-5 w-5 text-gray-700" />
                </button>
                
                {/* Zoom Effect on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                    Hover to zoom
                  </span>
                </div>
              </div>
            )}

            {/* Thumbnail Images - Only show in gallery mode */}
            {viewMode === 'images' && (
              <div className="flex gap-4 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index ? 'border-amber-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-600 font-medium">{product.category}</span>
                {product.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
                {product.isSale && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Sale</span>}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                        selectedColor === index
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-3 font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total: ${(product.price * quantity).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-amber-600 text-amber-600 rounded-xl font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium">5-Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-amber-500 font-medium text-amber-600">
                Description
              </button>
              <button className="py-4 px-1 font-medium text-gray-500 hover:text-gray-700">
                Specifications
              </button>
              <button className="py-4 px-1 font-medium text-gray-500 hover:text-gray-700">
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {product.features && (
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                {product.dimensions && (
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Dimensions</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{product.dimensions.width}"</div>
                        <div className="text-sm text-gray-600">Width</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{product.dimensions.height}"</div>
                        <div className="text-sm text-gray-600">Height</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{product.dimensions.depth}"</div>
                        <div className="text-sm text-gray-600">Depth</div>
                      </div>
                    </div>
                  </div>
                )}

                {product.materials && (
                  <div>
                    <h4 className="font-semibold mb-3">Materials</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((material, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;