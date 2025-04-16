import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantExample = () => {
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
            <a href="#menu" className="hover:text-white/80">Menu</a>
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#gallery" className="hover:text-white/80">Gallery</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <img 
          src="/images/portfolio/restaurant.jpg" 
          alt="Restaurant Interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            La Cucina
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Authentic Italian cuisine in the heart of the city
          </p>
          <a 
            href="#menu" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg transition-colors inline-block"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Starters</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Bruschetta al Pomodoro</h4>
                    <p className="text-gray-600">Toasted bread with fresh tomatoes, basil, and extra virgin olive oil</p>
                  </div>
                  <span className="text-primary font-medium">€8.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Carpaccio di Manzo</h4>
                    <p className="text-gray-600">Thinly sliced beef with rocket, parmesan, and truffle oil</p>
                  </div>
                  <span className="text-primary font-medium">€14.90</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Insalata Caprese</h4>
                    <p className="text-gray-600">Fresh mozzarella, tomatoes, and basil with balsamic glaze</p>
                  </div>
                  <span className="text-primary font-medium">€12.50</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Main Courses</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Spaghetti alle Vongole</h4>
                    <p className="text-gray-600">Spaghetti with fresh clams, garlic, and white wine sauce</p>
                  </div>
                  <span className="text-primary font-medium">€24.90</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Osso Buco alla Milanese</h4>
                    <p className="text-gray-600">Braised veal shanks with vegetables and gremolata</p>
                  </div>
                  <span className="text-primary font-medium">€32.50</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium">Risotto ai Funghi</h4>
                    <p className="text-gray-600">Creamy mushroom risotto with parmesan and truffle</p>
                  </div>
                  <span className="text-primary font-medium">€22.90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1995 by Chef Marco Rossi, La Cucina brings the authentic flavors of Italy to your table. Our commitment to using only the finest ingredients and traditional cooking methods has made us a favorite among food enthusiasts.
              </p>
              <p className="text-lg text-gray-600">
                Every dish tells a story of Italian heritage, carefully crafted to bring you the true taste of Italy. Our passionate team of chefs and servers work together to create an unforgettable dining experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/portfolio/restaurant-detail-1.jpg" 
                alt="Restaurant Interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/images/portfolio/restaurant-detail-2.jpg" 
                alt="Chef at Work" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={`/images/portfolio/restaurant-gallery-${item}.jpg`}
                  alt={`Gallery Image ${item}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">Dish Name</h3>
                    <p className="text-sm">Signature creation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Reservations</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  max="20"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
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
                Make Reservation
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
              <h3 className="text-xl font-semibold mb-4">La Cucina</h3>
              <p className="text-gray-400">
                Authentic Italian cuisine since 1995
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                123 Italian Street<br />
                City, Country<br />
                Phone: (123) 456-7890<br />
                Email: info@lacucina.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="text-gray-400">
                Monday - Thursday: 11:00 - 22:00<br />
                Friday - Saturday: 11:00 - 23:00<br />
                Sunday: 12:00 - 21:00
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 La Cucina. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantExample; 