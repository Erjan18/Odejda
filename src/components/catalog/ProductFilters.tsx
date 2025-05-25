import React, { useState } from 'react';
import { X } from 'lucide-react';
import { categories } from '../../data/products';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onReset: () => void;
}

const ProductFilters: React.FC<FiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onReset,
}) => {
  const [minPrice, setMinPrice] = useState<string>(priceRange[0].toString());
  const [maxPrice, setMaxPrice] = useState<string>(priceRange[1].toString());

  const handlePriceApply = () => {
    onPriceRangeChange([parseInt(minPrice) || 0, parseInt(maxPrice) || 50000]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Фильтры</h3>
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-blue-800 hover:text-blue-600"
        >
          Сбросить всё
        </button>
      </div>

      {/* Категории */}
      <div className="border-t border-gray-200 py-4">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Категории</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="all"
              name="category"
              type="radio"
              checked={selectedCategory === ''}
              onChange={() => onCategoryChange('')}
              className="h-4 w-4 text-blue-800 border-gray-300 focus:ring-blue-700"
            />
            <label htmlFor="all" className="ml-3 text-sm text-gray-600">
              Все товары
            </label>
          </div>

          {categories.filter(cat => cat !== 'все товары').map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={category}
                name="category"
                type="radio"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="h-4 w-4 text-blue-800 border-gray-300 focus:ring-blue-700"
              />
              <label htmlFor={category} className="ml-3 text-sm text-gray-600 capitalize">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Цена */}
      <div className="border-t border-gray-200 py-4">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Цена</h4>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="min-price" className="sr-only">
              Минимальная цена
            </label>
            <input
              type="number"
              id="min-price"
              placeholder="От"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="sr-only">
              Максимальная цена
            </label>
            <input
              type="number"
              id="max-price"
              placeholder="До"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handlePriceApply}
          className="mt-3 w-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 rounded"
        >
          Применить
        </button>
      </div>

      {/* Размеры */}
      <div className="border-t border-gray-200 py-4">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Размеры</h4>
        <div className="grid grid-cols-4 gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL', '42', '44', '46', '48', '50', '52'].map((size) => (
            <div key={size} className="flex items-center justify-center">
              <button
                type="button"
                className="w-full h-10 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {size}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Активные фильтры */}
      {(selectedCategory || (priceRange[0] > 0 || priceRange[1] < 50000)) && (
        <div className="border-t border-gray-200 py-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Активные фильтры</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="inline-flex items-center rounded-full bg-gray-100 py-1 pl-2 pr-1 text-sm font-medium text-gray-700">
                Категория: {selectedCategory}
                <button
                  type="button"
                  onClick={() => onCategoryChange('')}
                  className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                >
                  <span className="sr-only">Удалить фильтр по категории</span>
                  <X size={14} />
                </button>
              </span>
            )}
            
            {(priceRange[0] > 0 || priceRange[1] < 50000) && (
              <span className="inline-flex items-center rounded-full bg-gray-100 py-1 pl-2 pr-1 text-sm font-medium text-gray-700">
                Цена: {priceRange[0]} - {priceRange[1]} сом
                <button
                  type="button"
                  onClick={() => onPriceRangeChange([0, 50000])}
                  className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                >
                  <span className="sr-only">Удалить фильтр по цене</span>
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;