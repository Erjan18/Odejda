import React from 'react';
import { Truck, RefreshCw, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    name: 'Бесплатная доставка',
    description: 'Бесплатная доставка по Бишкеку',
    icon: Truck,
  },
  {
    name: 'Гарантия качества',
    description: 'Мы гарантируем высокое качество всей нашей продукции',
    icon: ShieldCheck,
  },
  {
    name: 'Быстрая обработка',
    description: 'Отправка заказа в течение 24 часов после оплаты',
    icon: Clock,
  },
  {
    name: 'Легкий возврат',
    description: 'Возврат или обмен товара в течение 14 дней',
    icon: RefreshCw,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Почему выбирают нас</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Мы стремимся обеспечить лучший сервис для наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-800 mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;