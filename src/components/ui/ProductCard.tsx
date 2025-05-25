import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Бейджи */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
              Новинка
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
              Скидка
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm text-gray-700 font-medium">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500 capitalize">{product.category}</p>
        <div className="mt-1 flex items-center">
          <span className="text-sm font-medium text-gray-900">
            {product.price.toLocaleString()} сом
          </span>
          {product.oldPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {product.oldPrice.toLocaleString()} сом
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;