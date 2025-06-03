import React from 'react';
import Layout from '../components/layout/Layout';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О компании</h1>
          <p className="text-xl text-gray-600">
            Наша швейная фабрика производит качественную одежду с 2005 года
          </p>
        </div>

        {/* История компании */}
        <div className="mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша история</h2>
              <p className="text-lg text-gray-600 mb-4">
                Швейная фабрика "СТИЛЬ" была основана в 2005 году и начинала свою деятельность как небольшое ателье с несколькими швейными машинками. Благодаря высокому качеству изделий и индивидуальному подходу к каждому клиенту, мы быстро завоевали доверие покупателей.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Сегодня "СТИЛЬ" - это современное производство с передовым оборудованием и командой профессионалов, которые создают модную, качественную и доступную одежду для всей семьи.
              </p>
              <p className="text-lg text-gray-600">
                Мы гордимся тем, что 80% нашего производства расположено в Бишкеке, что позволяет нам контролировать качество на всех этапах и поддерживать отечественную легкую промышленность.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/4492134/pexels-photo-4492134.jpeg"
                alt="Наша фабрика"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Наши ценности */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в нашей работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Качество</h3>
              <p className="text-gray-600">
                Мы используем только лучшие материалы и тщательно контролируем каждый этап производства
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-800 mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Инновации</h3>
              <p className="text-gray-600">
                Мы постоянно внедряем новые технологии и следим за последними тенденциями моды
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-800 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ответственность</h3>
              <p className="text-gray-600">
                Мы заботимся об окружающей среде и придерживаемся принципов устойчивого развития
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-800 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Команда</h3>
              <p className="text-gray-600">
                Наша команда профессионалов - главная ценность компании и залог нашего успеха
              </p>
            </div>
          </div>
        </div>

        {/* Производство */}
        <div className="mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3932942/pexels-photo-3932942.jpeg"
                alt="Производство"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-8 lg:mt-0 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Наше производство</h2>
              <p className="text-lg text-gray-600 mb-4">
                Наша фабрика оснащена современным оборудованием от ведущих мировых производителей, что позволяет нам выпускать продукцию высокого качества с минимальными затратами.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Мы используем инновационные технологии кроя и пошива, что позволяет создавать изделия, которые идеально сидят на фигуре и служат долгие годы.
              </p>
              <p className="text-lg text-gray-600">
                Все этапы производства проходят строгий контроль качества, что позволяет нам гарантировать безупречное исполнение каждого изделия.
              </p>
            </div>
          </div>
        </div>

        {/* Наша команда */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Люди, которые создают качественную одежду для вас
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
                alt="Елена Смирнова"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Елена Смирнова</h3>
                <p className="text-blue-800 mb-3">Генеральный директор</p>
                <p className="text-gray-600">
                  20 лет опыта в швейной промышленности. Под руководством Елены компания выросла из небольшого ателье в крупное производство.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                alt="Алексей Петров"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Алексей Петров</h3>
                <p className="text-blue-800 mb-3">Главный дизайнер</p>
                <p className="text-gray-600">
                  Выпускник Московского института дизайна. Создает коллекции, сочетающие современные тренды и классические элементы.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg"
                alt="Ольга Иванова"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Ольга Иванова</h3>
                <p className="text-blue-800 mb-3">Руководитель производства</p>
                <p className="text-gray-600">
                  15 лет опыта в организации швейного производства. Эксперт в оптимизации производственных процессов.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы всегда открыты для сотрудничества и ответим на все ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+996 (888) 888-555</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@style-shop.kg</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">г. Бишкек, ул. Гоголя, 84</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;