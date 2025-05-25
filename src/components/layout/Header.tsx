import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { categories } from '../../data/products';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-white bg-opacity-90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-blue-900">
            СТИЛЬ
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-800 font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="text-gray-800 hover:text-blue-800 font-medium">
              Каталог
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-800 font-medium">
              О компании
            </Link>
            <Link to="/contacts" className="text-gray-800 hover:text-blue-800 font-medium">
              Контакты
            </Link>
          </nav>

          {/* Иконки справа */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-800" aria-label="Поиск">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="text-gray-700 hover:text-blue-800 relative">
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            
            <Link to={isAuthenticated ? "/profile" : "/login"} className="text-gray-700 hover:text-blue-800">
              <User size={20} />
            </Link>
            
            {/* Кнопка мобильного меню */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Категории для десктопа */}
        <div className="hidden md:block border-t border-gray-200">
          <div className="flex justify-center space-x-8 py-3">
            {categories.map((category) => (
              <Link 
                key={category}
                to={`/catalog?category=${category !== 'все товары' ? category : ''}`}
                className="text-sm text-gray-600 hover:text-blue-800 capitalize"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-3 space-y-4">
            <Link to="/" className="block text-gray-800 hover:text-blue-800 font-medium py-2">
              Главная
            </Link>
            <Link to="/catalog" className="block text-gray-800 hover:text-blue-800 font-medium py-2">
              Каталог
            </Link>
            <Link to="/about" className="block text-gray-800 hover:text-blue-800 font-medium py-2">
              О компании
            </Link>
            <Link to="/contacts" className="block text-gray-800 hover:text-blue-800 font-medium py-2">
              Контакты
            </Link>
            
            <div className="py-2 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Категории</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link 
                    key={category}
                    to={`/catalog?category=${category !== 'все товары' ? category : ''}`}
                    className="block text-sm text-gray-600 hover:text-blue-800 capitalize py-1"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;