import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/ProductCard';
import ProductFilters from '../components/catalog/ProductFilters';
import { products } from '../data/products';
import { Product } from '../types';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  
  // Получаем категорию из URL параметров при загрузке страницы
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Применяем фильтры при изменении параметров
  useEffect(() => {
    let filtered = [...products];
    
    // Фильтр по категории
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Фильтр по цене
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange]);

  // Обновляем URL при изменении категории
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  // Сбрасываем все фильтры
  const handleResetFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 50000]);
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {selectedCategory ? `Категория: ${selectedCategory}` : 'Все товары'}
          </h1>
          <p className="text-gray-500">
            {filteredProducts.length} {
              filteredProducts.length === 1 ? 'товар' :
              filteredProducts.length > 1 && filteredProducts.length < 5 ? 'товара' : 'товаров'
            }
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
          {/* Фильтры для десктопа */}
          <div className="hidden lg:block">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              onReset={handleResetFilters}
            />
          </div>

          {/* Список товаров */}
          <div className="mt-6 lg:col-span-3 lg:mt-0">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Товары не найдены</h3>
                <p className="text-gray-500 mb-4">
                  По вашему запросу не найдено товаров. Попробуйте изменить параметры фильтрации.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="text-blue-800 hover:text-blue-600 font-medium"
                >
                  Сбросить все фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;