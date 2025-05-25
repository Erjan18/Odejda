import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">СТИЛЬ</h3>
            <p className="text-gray-300 mb-4">
              Производство и продажа качественной одежды с 2005 года. Мы создаем стильные и удобные вещи для современных людей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Категории */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=верхняя одежда" className="text-gray-300 hover:text-white transition-colors">
                  Верхняя одежда
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=платья" className="text-gray-300 hover:text-white transition-colors">
                  Платья
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=блузы" className="text-gray-300 hover:text-white transition-colors">
                  Блузы
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=джинсы" className="text-gray-300 hover:text-white transition-colors">
                  Джинсы
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=костюмы" className="text-gray-300 hover:text-white transition-colors">
                  Костюмы
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">
                  Все товары
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-300">info@style-shop.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-300">г. Москва, ул. Текстильщиков, д. 8, стр. 3</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} СТИЛЬ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;