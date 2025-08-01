import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Modern Minimalist",
      description: "Clean lines and contemporary aesthetics",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: 24,
      featured: true
    },
    {
      id: 2,
      name: "Classic Elegance",
      description: "Timeless pieces with sophisticated charm",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: 18,
      featured: true
    },
    {
      id: 3,
      name: "Scandinavian Style",
      description: "Nordic-inspired comfort and functionality",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: 32,
      featured: false
    },
    {
      id: 4,
      name: "Industrial Chic",
      description: "Raw materials meet refined design",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: 15,
      featured: false
    },
    {
      id: 5,
      name: "Luxury Living",
      description: "Premium materials and exceptional craftsmanship",
      image: "https://images.pexels.com/photos/586022/pexels-photo-586022.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: 21,
      featured: true
    },
    {
      id: 6,
      name: "Outdoor Paradise",
      description: "Weather-resistant furniture for outdoor spaces",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      products: 12,
      featured: false
    },
    {
      id: 7,
      name: "Cafeteria",
      description: "",
      image: "https://m.media-amazon.com/images/I/81lfs6GQ1HL.jpg",
      products: 3,
      featured: false
    }
  ];

  const featuredCollections = collections.filter(c => c.featured);
  const regularCollections = collections.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated collections, each telling a unique story through 
            exceptional design and craftsmanship
          </p>
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">
              Our most popular and trending furniture collections
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Large Featured Collection */}
            <div className="lg:row-span-2">
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src={featuredCollections[0]?.image}
                  alt={featuredCollections[0]?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">{featuredCollections[0]?.name}</h3>
                  <p className="text-gray-200 mb-4 text-lg">{featuredCollections[0]?.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-semibold">
                      {featuredCollections[0]?.products} Products
                    </span>
                    <Link
                      to="/shop"
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                    >
                      Explore <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Featured Collections */}
            <div className="space-y-8">
              {featuredCollections.slice(1, 3).map((collection) => (
                <div key={collection.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-gray-200 mb-3">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 font-medium">
                        {collection.products} Products
                      </span>
                      <Link
                        to="/shop"
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        View <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Collections Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Showroom</h3>
  <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative mb-8">
  
  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
    <div className="text-center w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps?q=Ground+Floor,+Besides+MF+Khan,+Pavan+Enclave,+Daba+Garden+Rd,+Prakasaraopeta,+Nehru+Nagar,+Ram+Nagar,+Visakhapatnam,+Andhra+Pradesh+530020&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '1rem', width: '100%', height: '100%' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Showroom Location"
        ></iframe>
      </div>
    </div>
  </div>
</div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">All Collections</h2>
            <p className="text-xl text-gray-600">
              Discover the full range of our furniture collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {collection.name}
                    </h3>
                    {collection.featured && (
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {collection.products} Products
                    </span>
                    <Link
                      to="/shop"
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors font-semibold"
                    >
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Style</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not sure which collection suits your space? Take our style quiz to discover 
              the perfect furniture pieces for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Answer Questions</h3>
              <p className="text-gray-600">Tell us about your space, preferences, and lifestyle</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">Receive personalized collection suggestions</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Shop With Confidence</h3>
              <p className="text-gray-600">Discover pieces that perfectly match your style</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
              Take Style Quiz <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;