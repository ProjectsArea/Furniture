import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Art of Minimalist Living: Creating Space That Breathes",
    excerpt: "Discover how to transform your home into a serene sanctuary through thoughtful design choices and mindful furniture selection.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Elena Rodriguez",
    date: "March 15, 2024",
    category: "Interior Design",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Sustainable Furniture: Making Eco-Conscious Choices",
      excerpt: "Learn about sustainable materials and ethical manufacturing practices in modern furniture design.",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Marcus Chen",
      date: "March 12, 2024",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Color Psychology in Home Design",
      excerpt: "How different colors affect mood and atmosphere in your living spaces.",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Design Tips",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Small Space, Big Style: Maximizing Your Home",
      excerpt: "Creative solutions for making the most of limited square footage without sacrificing style.",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Elena Rodriguez",
      date: "March 8, 2024",
      category: "Space Planning",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The Return of Vintage: Mixing Old and New",
      excerpt: "How to successfully blend vintage pieces with contemporary furniture for a unique look.",
      image: "https://images.pexels.com/photos/586022/pexels-photo-586022.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Marcus Chen",
      date: "March 5, 2024",
      category: "Style Guide",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Lighting Design: Setting the Perfect Mood",
      excerpt: "Master the art of layered lighting to create ambiance in every room of your home.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Johnson",
      date: "March 3, 2024",
      category: "Lighting",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Furniture Care: Preserving Your Investment",
      excerpt: "Essential tips for maintaining and protecting your premium furniture pieces.",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Elena Rodriguez",
      date: "March 1, 2024",
      category: "Maintenance",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Interior Design", "Sustainability", "Design Tips", "Space Planning", "Style Guide", "Lighting", "Maintenance"];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Design Inspiration & Ideas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the latest trends, expert tips, and timeless wisdom to help you 
            create beautiful, functional spaces that reflect your personal style
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our latest deep dive into design excellence</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full aspect-[4/3] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{featuredPost.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <span>{featuredPost.readTime}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {featuredPost.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{featuredPost.author}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                >
                  Read Article <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white text-gray-600 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our latest design insights and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Inspired</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest design trends and expert tips delivered to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. Your email is safe with us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;