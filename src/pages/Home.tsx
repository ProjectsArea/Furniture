import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import Hero from '../components/Hero';
import OffersCarousel from '../components/OffersCarousel';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The quality and craftsmanship exceeded our expectations. Every piece is a work of art.",
      author: "Sarah Johnson",
      role: "Interior Designer",
      rating: 5,
    },
    {
      text: "Exceptional service and beautiful furniture. Our home has been transformed completely.",
      author: "Michael Chen",
      role: "Homeowner",
      rating: 5,
    },
    {
      text: "Professional delivery and installation. The attention to detail is remarkable.",
      author: "Emma Wilson",
      role: "Architect",
      rating: 5,
    },
  ];

  const features = [
    { icon: Truck, title: "Free Delivery", description: "Complimentary white-glove delivery service" },
    { icon: Shield, title: "5-Year Warranty", description: "Comprehensive coverage on all products" },
    { icon: Headphones, title: "24/7 Support", description: "Expert assistance whenever you need it" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium furniture pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mattress */}
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://5.imimg.com/data5/UA/YH/IP/SELLER-1408445/duroflex-mattress-in-bangalore-500x500.jpg" 
                alt="Mattress Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Mattress</h3>
                <p className="text-gray-200 mb-4">Comfort meets elegance</p>
                <Link to="/collections" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Bedroom */}
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Bedroom Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Bedroom</h3>
                <p className="text-gray-200 mb-4">Serene sanctuary design</p>
                <Link to="/collections" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Cafeteria */}
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://lakshmishomestyle.in/wp-content/uploads/2023/02/CLASSIC_SMART_Cafeteria_Chairs_Collections.jpg" 
                alt="Cafeteria Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Cafeteria</h3>
                <p className="text-gray-200 mb-4">Gather in style</p>
                <Link to="/collections" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OffersCarousel />

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked pieces that define luxury and comfort
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105"
            >
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>
          
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-lg font-semibold">
                  {testimonial.author}
                  <span className="text-gray-300 font-normal block">{testimonial.role}</span>
                </cite>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-amber-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Inspired</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for design tips, new arrivals, and exclusive offers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>

          {/* Follow Us Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6">
              {/* Social Icons */}
              <a href="https://www.youtube.com/@tangudufurniture" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M21.8 8.001a2.751 2.751 0 0 0-1.936-1.946C18.027 6 12 6 12 6s-6.027 0-7.864.055A2.751 2.751 0 0 0 2.2 8.001 28.12 28.12 0 0 0 2 12a28.12 28.12 0 0 0 .2 3.999 2.751 2.751 0 0 0 1.936 1.946C5.973 18 12 18 12 18s6.027 0 7.864-.055A2.751 2.751 0 0 0 21.8 15.999 28.12 28.12 0 0 0 22 12a28.12 28.12 0 0 0-.2-3.999zM10 15V9l6 3-6 3z" /></svg>
              </a>
              <a href="https://www.instagram.com/tangudufurnitur" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="https://www.facebook.com/Tangudufurnitures" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.406.592 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/></svg>
              </a>
              <a href="https://x.com/tangudufurnitur" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.904 4.904 0 0 1 .964 9.1v.062a4.917 4.917 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.084 4.928 4.928 0 0 0 4.6 3.419A9.867 9.867 0 0 1 0 21.543a13.905 13.905 0 0 0 7.548 2.209c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
