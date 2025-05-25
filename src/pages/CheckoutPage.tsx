import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const deliveryMethods = [
  { id: 'courier', title: 'Курьерская доставка', price: 300, minDays: 1, maxDays: 3 },
  { id: 'post', title: 'Почта России', price: 250, minDays: 3, maxDays: 7 },
  { id: 'pickup', title: 'Самовывоз', price: 0, minDays: 0, maxDays: 1 },
];

const paymentMethods = [
  { id: 'card', title: 'Банковская карта' },
  { id: 'cash', title: 'Наличными при получении' },
];

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: user?.address || '',
    city: '',
    postalCode: '',
  });
  
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки заказа
    setTimeout(() => {
      clearCart();
      navigate('/thank-you');
      setIsSubmitting(false);
    }, 1500);
  };

  const selectedDelivery = deliveryMethods.find(method => method.id === deliveryMethod);
  const deliveryPrice = selectedDelivery?.price || 0;
  const isFreeDelivery = getCartTotal() >= 5000;
  const finalDeliveryPrice = isFreeDelivery ? 0 : deliveryPrice;
  const totalPrice = getCartTotal() + finalDeliveryPrice;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Оформление заказа</h1>

        <form onSubmit={handleSubmit}>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7">
              {/* Данные заказчика */}
              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Ваши данные</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Фамилия *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Доставка */}
              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Адрес доставки</h2>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Адрес *
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      Город *
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Индекс *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Способ доставки */}
              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Способ доставки</h2>
                
                <div className="space-y-4">
                  {deliveryMethods.map((method) => (
                    <div key={method.id} className="flex items-center">
                      <input
                        id={`delivery-${method.id}`}
                        name="delivery-method"
                        type="radio"
                        checked={deliveryMethod === method.id}
                        onChange={() => setDeliveryMethod(method.id)}
                        className="h-4 w-4 text-blue-800 border-gray-300 focus:ring-blue-700"
                      />
                      <label htmlFor={`delivery-${method.id}`} className="ml-3 flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">{method.title}</span>
                        <span className="block text-sm text-gray-500">
                          {method.price === 0 
                            ? 'Бесплатно' 
                            : `${method.price} сом`}
                          {method.minDays > 0 && 
                            ` · ${method.minDays}-${method.maxDays} дн.`}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Способ оплаты */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Способ оплаты</h2>
                
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center">
                      <input
                        id={`payment-${method.id}`}
                        name="payment-method"
                        type="radio"
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="h-4 w-4 text-blue-800 border-gray-300 focus:ring-blue-700"
                      />
                      <label htmlFor={`payment-${method.id}`} className="ml-3 flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">{method.title}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Итоговая информация */}
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Ваш заказ</h2>
                
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.product.name} × {item.quantity}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.size}, {item.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {(item.product.price * item.quantity).toLocaleString()} сом
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 py-4 mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <p className="text-gray-600">Товары</p>
                    <p className="font-medium text-gray-900">{getCartTotal().toLocaleString()} сом</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Доставка</p>
                    <p className="font-medium text-gray-900">
                      {isFreeDelivery ? 'Бесплатно' : `${finalDeliveryPrice} сом`}
                    </p>
                  </div>
                  
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                    <p className="text-base font-medium text-gray-900">Итого</p>
                    <p className="text-base font-bold text-gray-900">{totalPrice.toLocaleString()} сом</p>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-4"
                >
                  {isSubmitting ? 'Обработка...' : 'Оформить заказ'}
                </Button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных и публичной офертой
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutPage;