import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BANG RODIN GEN-2",
      subtitle: "Революция в мире 3D-печати корпусов",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <img 
            src="https://cdn.poehali.dev/files/5d1ff307-cfac-4a80-a533-136509edb1cd.jpg"
            alt="BANG RODIN GEN-2"
            className="w-2/3 rounded-xl shadow-2xl"
          />
          <p className="text-xl text-gray-600 max-w-2xl text-center">
            Инновационная конструкция корпуса для 3D-принтеров нового поколения
          </p>
        </div>
      )
    },
    {
      title: "Проблема",
      subtitle: "Рынок нуждается в надёжных решениях",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-red-50 border-red-200">
            <Icon name="AlertCircle" size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Сложность сборки</h3>
            <p className="text-gray-700">Существующие корпуса требуют профессиональных навыков и много времени на установку</p>
          </Card>
          <Card className="p-6 bg-red-50 border-red-200">
            <Icon name="TrendingDown" size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Высокая стоимость</h3>
            <p className="text-gray-700">Готовые решения на рынке стоят от $500 до $2000, недоступны для большинства</p>
          </Card>
          <Card className="p-6 bg-red-50 border-red-200">
            <Icon name="Wrench" size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Плохая адаптация</h3>
            <p className="text-gray-700">Корпуса не подходят для разных моделей принтеров, требуют доработок</p>
          </Card>
          <Card className="p-6 bg-red-50 border-red-200">
            <Icon name="ShieldAlert" size={40} className="text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Низкое качество</h3>
            <p className="text-gray-700">Недостаточная термоизоляция и вентиляция снижают качество печати</p>
          </Card>
        </div>
      )
    },
    {
      title: "Решение",
      subtitle: "BANG RODIN GEN-2 — умный корпус для всех",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <Icon name="Zap" size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Быстрая сборка</h3>
              <p className="text-gray-700">Модульная конструкция — сборка за 30 минут без инструментов</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <Icon name="DollarSign" size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Доступная цена</h3>
              <p className="text-gray-700">Open-source проект — себестоимость $120-150</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <Icon name="Maximize" size={40} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Универсальность</h3>
              <p className="text-gray-700">Адаптируется под любые модели принтеров</p>
            </Card>
          </div>
          <img 
            src="https://cdn.poehali.dev/files/504f6442-80dd-42d8-9529-1d6769f8a36f.jpeg"
            alt="Технические чертежи"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      )
    },
    {
      title: "Рынок",
      subtitle: "Огромный потенциал роста",
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <h3 className="text-3xl font-bold text-primary mb-2">$18 млрд</h3>
              <p className="text-gray-700">Объём рынка 3D-печати в 2024 году</p>
            </Card>
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <h3 className="text-3xl font-bold text-primary mb-2">24% CAGR</h3>
              <p className="text-gray-700">Прогнозируемый рост до 2030 года</p>
            </Card>
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <h3 className="text-3xl font-bold text-primary mb-2">2.5 млн</h3>
              <p className="text-gray-700">Принтеров продано в 2023 году</p>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Целевая аудитория</h3>
            <Card className="p-4 border-l-4 border-primary">
              <h4 className="font-bold mb-2">Любители и мейкеры (60%)</h4>
              <p className="text-sm text-gray-600">Владельцы домашних принтеров, хобби-энтузиасты</p>
            </Card>
            <Card className="p-4 border-l-4 border-accent">
              <h4 className="font-bold mb-2">Малый бизнес (25%)</h4>
              <p className="text-sm text-gray-600">Мастерские, прототипирование, малые производства</p>
            </Card>
            <Card className="p-4 border-l-4 border-secondary">
              <h4 className="font-bold mb-2">Образование (15%)</h4>
              <p className="text-sm text-gray-600">Школы, университеты, лаборатории</p>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Бизнес-модель",
      subtitle: "Множественные потоки дохода",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white shadow-lg">
            <Icon name="Package" size={36} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Продажа наборов</h3>
            <p className="text-gray-700 mb-4">Готовые DIY-наборы для самостоятельной сборки</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Себестоимость:</span><span className="font-bold">$120</span></div>
              <div className="flex justify-between"><span>Цена продажи:</span><span className="font-bold">$299</span></div>
              <div className="flex justify-between border-t pt-2"><span>Маржа:</span><span className="font-bold text-green-600">60%</span></div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-lg">
            <Icon name="FileText" size={36} className="text-accent mb-4" />
            <h3 className="text-xl font-bold mb-3">Лицензирование</h3>
            <p className="text-gray-700 mb-4">Продажа чертежей и инструкций для печати</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Стандарт:</span><span className="font-bold">$29</span></div>
              <div className="flex justify-between"><span>Премиум:</span><span className="font-bold">$79</span></div>
              <div className="flex justify-between border-t pt-2"><span>Маржа:</span><span className="font-bold text-green-600">95%</span></div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-lg">
            <Icon name="Sparkles" size={36} className="text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-3">Кастомизация</h3>
            <p className="text-gray-700 mb-4">Индивидуальные решения для бизнеса</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Средний чек:</span><span className="font-bold">$500+</span></div>
              <div className="flex justify-between"><span>Срок:</span><span className="font-bold">2-3 недели</span></div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-lg">
            <Icon name="Users" size={36} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Подписка</h3>
            <p className="text-gray-700 mb-4">Доступ к обновлениям и поддержка</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Месячная:</span><span className="font-bold">$9.99</span></div>
              <div className="flex justify-between"><span>Годовая:</span><span className="font-bold">$99</span></div>
            </div>
          </Card>
        </div>
      )
    },
    {
      title: "Конкурентное преимущество",
      subtitle: "Почему мы лучше?",
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Параметр</th>
                  <th className="p-4 text-center">BANG RODIN</th>
                  <th className="p-4 text-center">Конкурент A</th>
                  <th className="p-4 text-center">Конкурент B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Цена</td>
                  <td className="p-4 text-center bg-green-50">$299</td>
                  <td className="p-4 text-center">$799</td>
                  <td className="p-4 text-center">$1200</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Время сборки</td>
                  <td className="p-4 text-center bg-green-50">30 мин</td>
                  <td className="p-4 text-center">2-3 часа</td>
                  <td className="p-4 text-center">4-5 часов</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Open-source</td>
                  <td className="p-4 text-center bg-green-50">✓</td>
                  <td className="p-4 text-center">✗</td>
                  <td className="p-4 text-center">✗</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Модульность</td>
                  <td className="p-4 text-center bg-green-50">✓</td>
                  <td className="p-4 text-center">Частично</td>
                  <td className="p-4 text-center">✗</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Поддержка сообщества</td>
                  <td className="p-4 text-center bg-green-50">Активная</td>
                  <td className="p-4 text-center">Слабая</td>
                  <td className="p-4 text-center">Нет</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "Дорожная карта",
      subtitle: "План развития на 18 месяцев",
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20"></div>
            
            <div className="space-y-8 relative">
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg z-10">Q1</div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3">Запуск MVP</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Финализация прототипа GEN-2</li>
                    <li>• Публикация чертежей на GitHub</li>
                    <li>• Запуск предпродаж (100 наборов)</li>
                  </ul>
                </Card>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg z-10">Q2</div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3">Масштабирование</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Налаживание производства и логистики</li>
                    <li>• Запуск подписочной модели</li>
                    <li>• Партнёрства с производителями принтеров</li>
                  </ul>
                </Card>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg z-10">Q3</div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3">Расширение линейки</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Разработка GEN-3 (промышленная версия)</li>
                    <li>• Запуск marketplace аксессуаров</li>
                    <li>• Выход на международные рынки</li>
                  </ul>
                </Card>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg z-10">Q4</div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3">Экосистема</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Запуск образовательной платформы</li>
                    <li>• Создание сертификационной программы</li>
                    <li>• B2B решения для образования</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Финансы",
      subtitle: "Прогноз на 3 года",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Год 1</h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">$250K</p>
              <p className="text-sm text-gray-600">Выручка</p>
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between"><span>Наборы:</span><span>500 шт</span></div>
                <div className="flex justify-between"><span>Лицензии:</span><span>1200 шт</span></div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Год 2</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">$1.2M</p>
              <p className="text-sm text-gray-600">Выручка</p>
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between"><span>Наборы:</span><span>2500 шт</span></div>
                <div className="flex justify-between"><span>Подписки:</span><span>800 акт.</span></div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Год 3</h3>
              <p className="text-4xl font-bold text-purple-600 mb-2">$3.5M</p>
              <p className="text-sm text-gray-600">Выручка</p>
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between"><span>B2B:</span><span>40%</span></div>
                <div className="flex justify-between"><span>Междунар.:</span><span>35%</span></div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Требуется инвестиций</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">$150K</p>
                <p className="text-gray-600 mb-4">Seed раунд</p>
                <ul className="space-y-2 text-sm">
                  <li>• Производство первой партии — $60K</li>
                  <li>• Маркетинг и продвижение — $40K</li>
                  <li>• Команда (6 мес) — $35K</li>
                  <li>• Операционные расходы — $15K</li>
                </ul>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-700 mb-2">Возврат инвестиций</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-green-600" />
                    <span>Точка безубыточности: 8 месяцев</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Target" className="text-blue-600" />
                    <span>ROI через 18 месяцев: 350%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Award" className="text-purple-600" />
                    <span>Exit через 3-4 года: $10-15M</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      title: "Команда",
      subtitle: "Опытные профессионалы",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Алексей Иванов</h3>
            <p className="text-primary font-semibold mb-3">CEO & Основатель</p>
            <p className="text-sm text-gray-600">10 лет в 3D-индустрии, ex-лидер продукта в крупной компании</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Мария Петрова</h3>
            <p className="text-accent font-semibold mb-3">CTO</p>
            <p className="text-sm text-gray-600">Инженер-механик, 8 лет проектирования промышленного оборудования</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Дмитрий Козлов</h3>
            <p className="text-secondary font-semibold mb-3">CMO</p>
            <p className="text-sm text-gray-600">Маркетолог с опытом запуска 5+ hardware стартапов</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ольга Смирнова</h3>
            <p className="text-purple-600 font-semibold mb-3">Head of Operations</p>
            <p className="text-sm text-gray-600">Эксперт по производству и логистике, ex-Amazon</p>
          </Card>
        </div>
      )
    },
    {
      title: "Контакты",
      subtitle: "Давайте обсудим сотрудничество",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <img 
            src="https://cdn.poehali.dev/files/5d1ff307-cfac-4a80-a533-136509edb1cd.jpg"
            alt="BANG RODIN GEN-2"
            className="w-1/2 rounded-xl shadow-2xl"
          />
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Готовы изменить индустрию вместе?</h2>
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" className="text-primary" />
                <a href="mailto:invest@bangrodin.com" className="text-primary hover:underline">invest@bangrodin.com</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" className="text-accent" />
                <a href="tel:+79991234567" className="text-accent hover:underline">+7 (999) 123-45-67</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Globe" className="text-secondary" />
                <a href="https://bangrodin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">bangrodin.com</a>
              </div>
            </div>
            <div className="pt-6">
              <Button size="lg" className="text-xl px-8 py-6">
                <Icon name="Rocket" className="mr-2" />
                Стать инвестором
              </Button>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        <div className="mb-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад к документации
          </Link>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="bg-white rounded-2xl shadow-2xl flex-1 flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-primary via-accent to-secondary p-6 text-white">
              <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
              <p className="text-lg opacity-90 mt-1">{slides[currentSlide].subtitle}</p>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {slides[currentSlide].content}
            </div>

            <div className="border-t p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <Button 
                  onClick={prevSlide}
                  variant="outline"
                  disabled={currentSlide === 0}
                  className="flex items-center gap-2"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Назад
                </Button>
                
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-primary w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Слайд ${index + 1}`}
                    />
                  ))}
                </div>

                <Button 
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="flex items-center gap-2"
                >
                  Далее
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                Слайд {currentSlide + 1} из {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;