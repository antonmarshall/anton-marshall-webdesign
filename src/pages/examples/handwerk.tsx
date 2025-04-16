import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HandwerkExample = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:text-white/80">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#services" className="hover:text-white/80">Services</a>
            <a href="#portfolio" className="hover:text-white/80">Portfolio</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <img 
          src="/images/portfolio/handwerk.jpg" 
          alt="Carpentry Workshop" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Müller & Son<br />Carpentry
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Crafting timeless pieces with traditional techniques and modern precision
          </p>
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Since 1985, Müller & Son has been crafting exceptional wooden pieces that combine traditional craftsmanship with contemporary design. Our family-owned workshop in the heart of the city has become a trusted name in custom carpentry.
              </p>
              <p className="text-lg text-gray-600">
                Every piece we create tells a story - whether it's a custom kitchen, a unique piece of furniture, or a complete interior renovation. We take pride in our attention to detail and our commitment to quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/portfolio/handwerk-detail-1.jpg" 
                alt="Workshop Detail" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/images/portfolio/handwerk-detail-2.jpg" 
                alt="Finished Work" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Custom Furniture</h3>
              <p className="text-gray-600">
                Bespoke furniture pieces designed and crafted to your exact specifications, using the finest materials and traditional joinery techniques.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Kitchen Design</h3>
              <p className="text-gray-600">
                Custom kitchen solutions that combine functionality with aesthetic beauty, featuring premium materials and expert craftsmanship.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Interior Renovation</h3>
              <p className="text-gray-600">
                Complete interior transformations, from custom built-ins to architectural details, creating cohesive and beautiful living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={`/images/portfolio/handwerk-project-${item}.jpg`}
                  alt={`Project ${item}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                    <p className="text-sm">Custom furniture piece</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Müller & Son Carpentry</h3>
              <p className="text-gray-400">
                Crafting excellence since 1985
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                123 Woodcraft Street<br />
                City, Country<br />
                Phone: (123) 456-7890<br />
                Email: info@muller-son.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 8:00 - 18:00<br />
                Saturday: 9:00 - 14:00<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Müller & Son Carpentry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HandwerkExample; 