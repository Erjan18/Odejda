import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Верхняя одежда',
    href: '/catalog?category=верхняя одежда',
    image: 'https://nw-shop.ru/files/uploads/vesna-leto-collection-nord-wind-2020-zhenskoe.jpg',
  },
  {
    name: 'Платья',
    href: '/catalog?category=платья',
    image: 'https://www.sv-centre.ru/wp-content/uploads/2022/09/Kira-1-400x650.jpg',
  },
  {
    name: 'Костюмы',
    href: '/catalog?category=костюмы',
    image: 'https://stockmann.ru/istk/eNYN_uIhzzSGdwWxPyYgXkIUJ7nT35-0Xevhx3f9MJg/rs:fill:747::1/g:no/bG9jYWw6Ly8vdXBsb2FkLy9jbXMvc3RhdGljL2Zhc2hpb24tYmxvZy9hcnRpY2xlLzYzZTllZDA3NDI4MzBkNDA2ZDA1MWM1NC9ibG9jay82M2U5ZjMyOWU4YWVhODg0N2IwZWFhZjYvc3lBSElTdEZzYkZkQllVZnhtM1k5Y1MxRTNDdEY5OFBBVU80VkdaZS5qcGc.jpg',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Категории</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Познакомьтесь с нашими основными категориями товаров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-h-3 aspect-w-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.name}</h3>
                <p className="mt-1 text-sm md:text-base text-white/80 group-hover:text-white">
                  Смотреть коллекцию
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;