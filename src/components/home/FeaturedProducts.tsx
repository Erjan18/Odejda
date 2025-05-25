import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { products } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  // Получаем только новые или со скидкой товары
  const featuredProducts = products.filter(product => product.isNew || product.isSale).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Популярные товары</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Познакомьтесь с нашими новинками и товарами со скидкой
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/catalog">
            <Button variant="outline">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;