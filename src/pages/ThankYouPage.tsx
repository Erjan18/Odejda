import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(10000 + Math.random() * 90000);

  // Перенаправление на главную страницу, если пользователь попал сюда не через оформление заказа
  useEffect(() => {
    const hasOrderProcess = localStorage.getItem('orderProcessed');
    if (!hasOrderProcess) {
      localStorage.setItem('orderProcessed', 'true');
    }

    return () => {
      localStorage.removeItem('orderProcessed');
    };
  }, [navigate]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Спасибо за заказ!</h1>
          <p className="text-lg text-gray-600 mb-2">
            Ваш заказ #{orderNumber} успешно оформлен.
          </p>
          <p className="text-gray-600 mb-8">
            Мы отправили подтверждение на вашу почту. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button variant="primary" fullWidth>
                Вернуться на главную
              </Button>
            </Link>
            
            <Link to="/catalog">
              <Button variant="outline" fullWidth>
                Продолжить покупки
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;