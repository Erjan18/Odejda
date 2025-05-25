import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { UserCircle, Package, CreditCard, User, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  // Если пользователь не авторизован, перенаправляем на страницу входа
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Моковые данные для заказов
  const orders = [
    {
      id: 12345,
      date: '10.06.2025',
      status: 'Доставлен',
      total: 12980,
      items: 3,
    },
    {
      id: 12344,
      date: '28.05.2025',
      status: 'Доставлен',
      total: 5490,
      items: 1,
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Личный кабинет</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* Боковое меню */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 shadow-sm rounded-lg mb-6">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <UserCircle size={56} className="text-gray-400" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <a
                  href="#profile"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-50 text-blue-800"
                >
                  <User size={18} className="mr-2" />
                  Профиль
                </a>
                <a
                  href="#orders"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                >
                  <Package size={18} className="mr-2" />
                  Мои заказы
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                >
                  <CreditCard size={18} className="mr-2" />
                  Способы оплаты
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} className="mr-2" />
                  Выйти
                </button>
              </nav>
            </div>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-9">
            {/* Профиль */}
            <div id="profile" className="bg-white p-6 shadow-sm rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Личные данные</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Имя и фамилия</h3>
                  <p className="text-gray-900">{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                  <p className="text-gray-900">{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Телефон</h3>
                  <p className="text-gray-900">{user.phone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Адрес доставки</h3>
                  <p className="text-gray-900">{user.address || 'Не указан'}</p>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline">
                  Редактировать профиль
                </Button>
              </div>
            </div>

            {/* Заказы */}
            <div id="orders" className="bg-white p-6 shadow-sm rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">История заказов</h2>

              {orders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          № заказа
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Дата
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Статус
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Сумма
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Товары
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Действия</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #{order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.total.toLocaleString()} сом
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.items} шт.
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-blue-800 hover:text-blue-700">
                              Подробнее
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">У вас пока нет заказов</h3>
                  <p className="text-gray-500 mb-4">
                    Когда вы сделаете заказ, информация о нем появится здесь
                  </p>
                  <Button variant="primary" onClick={() => navigate('/catalog')}>
                    Перейти в каталог
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;