import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ProductImages from '../components/product/ProductImages';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { Product } from '../types';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Загружаем данные о товаре
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
        
        // Находим похожие товары из той же категории
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h1>
            <p className="text-gray-500 mb-6">
              Товар, который вы ищете, не существует или был удален.
            </p>
            <Link to="/catalog">
              <Button variant="primary">
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart(product, quantity, selectedSize, selectedColor);
      alert('Товар добавлен в корзину!');
    } else {
      alert('Пожалуйста, выберите размер и цвет');
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Изображения товара */}
          <div>
            <ProductImages images={product.images} name={product.name} />
          </div>

          {/* Информация о товаре */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            
            {/* Цена */}
            <div className="mt-3 flex items-center">
              <h2 className="sr-only">Информация о товаре</h2>
              <p className="text-3xl tracking-tight text-gray-900">{product.price.toLocaleString()} сом</p>
              {product.oldPrice && (
                <p className="ml-3 text-lg text-gray-500 line-through">{product.oldPrice.toLocaleString()} сом</p>
              )}
            </div>

            {/* Категория */}
            <div className="mt-2">
              <p className="text-sm text-gray-500 capitalize">
                Категория: {product.category}
              </p>
            </div>

            {/* Описание */}
            <div className="mt-4">
              <h3 className="sr-only">Описание</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-6">
              {/* Выбор цвета */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Цвет</h3>
                <div className="mt-2 flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedColor === color
                          ? 'bg-blue-800 text-white'
                          : 'bg-white border border-gray-300 text-gray-700'
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Выбор размера */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Размер</h3>
                <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`flex items-center justify-center rounded-md py-2 px-3 text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-blue-800 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Количество */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Количество</h3>
                <div className="mt-2 flex items-center">
                  <button
                    type="button"
                    className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mx-2 border border-gray-300 p-1 w-12 text-center rounded-md"
                  />
                  <button
                    type="button"
                    className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Кнопка добавления в корзину */}
              <div className="mt-8 flex">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
                </Button>
              </div>
            </div>

            {/* Доставка */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Доставка и оплата</h3>
              <p className="text-sm text-gray-500">
                Бесплатная доставка по России при заказе от 5000 сом. Срок доставки 3-7 рабочих дней.
              </p>
            </div>
          </div>
        </div>

        {/* Похожие товары */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;