import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';
import { Trash2, ChevronLeft, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Ваша корзина пуста</h1>
            <p className="text-gray-500 mb-6">
              Похоже, вы еще не добавили товары в корзину.
            </p>
            <Link to="/catalog">
              <Button variant="primary">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Корзина</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-8">
            {/* Список товаров */}
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                        </h3>
                        <p className="ml-4">{(item.product.price * item.quantity).toLocaleString()} сом</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 capitalize">
                        Цвет: {item.color}, Размер: {item.size}
                      </p>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          type="button"
                          className="p-2 text-gray-600"
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
                        <button
                          type="button"
                          className="p-2 text-gray-600"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-600 hover:text-red-800 flex items-center"
                      >
                        <Trash2 size={18} className="mr-1" />
                        <span>Удалить</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Продолжить покупки */}
            <div className="mt-6">
              <Link
                to="/catalog"
                className="flex items-center text-blue-800 hover:text-blue-600"
              >
                <ChevronLeft size={16} className="mr-1" />
                <span>Продолжить покупки</span>
              </Link>
            </div>
          </div>

          {/* Итоговая информация */}
          <div className="mt-10 lg:mt-0 lg:col-span-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Итого</h2>
              
              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-3">
                  <p>Товары ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} шт.)</p>
                  <p>{getCartTotal().toLocaleString()} сом</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mb-3">
                  <p>Доставка</p>
                  <p>{getCartTotal() >= 5000 ? 'Бесплатно' : '300 сом'}</p>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                  <p>Итого к оплате</p>
                  <p>
                    {(getCartTotal() + (getCartTotal() >= 5000 ? 0 : 300)).toLocaleString()} сом
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/checkout">
                  <Button variant="primary" size="lg" fullWidth>
                    Оформить заказ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;