import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeView, setActiveView] = useState('3d');

  const specifications = [
    { label: 'Габариты (ШxГxВ)', value: '1200 x 900 x 1800 мм', icon: 'Ruler' },
    { label: 'Вес конструкции', value: '85 кг', icon: 'Weight' },
    { label: 'Материал корпуса', value: 'Нержавеющая сталь 304', icon: 'BoxSelect' },
    { label: 'Мощность', value: '2.4 кВт', icon: 'Zap' },
    { label: 'Давление воды', value: '2.5-4.0 бар', icon: 'Droplets' },
    { label: 'Температура воды', value: '35-40°C', icon: 'Thermometer' },
  ];

  const components = [
    {
      name: 'Моечная камера',
      specs: ['Размер: 800x700x1200 мм', 'Материал: нержавеющая сталь', 'Дренажная система с фильтром'],
      status: 'Основной модуль'
    },
    {
      name: 'Система водоснабжения',
      specs: ['8 форсунок 360°', 'Расход: 12 л/мин', 'Регулируемое давление'],
      status: 'Гидравлика'
    },
    {
      name: 'Система сушки',
      specs: ['Воздушный обдув', 'Мощность: 1200 Вт', 'Регулируемая температура'],
      status: 'Сушка'
    },
    {
      name: 'Панель управления',
      specs: ['Сенсорный интерфейс 7"', 'IP65 защита', '5 программ мойки'],
      status: 'Управление'
    },
    {
      name: 'Система безопасности',
      specs: ['Датчики движения', 'Аварийная остановка', 'Датчики температуры'],
      status: 'Безопасность'
    },
  ];

  const materials = [
    { name: 'Корпус', material: 'Нержавеющая сталь AISI 304', thickness: '1.5 мм' },
    { name: 'Дверца', material: 'Поликарбонат ударопрочный', thickness: '8 мм' },
    { name: 'Поддон', material: 'Нержавеющая сталь с перфорацией', thickness: '2 мм' },
    { name: 'Уплотнители', material: 'Силикон пищевой', thickness: '-' },
    { name: 'Форсунки', material: 'Латунь хромированная', thickness: '-' },
  ];

  const billOfMaterials = [
    { category: 'Металлоконструкции', items: [
      { name: 'Лист нержавеющей стали AISI 304 (1.5мм)', quantity: 4, unit: 'шт', size: '1200x900 мм' },
      { name: 'Лист нержавеющей стали AISI 304 (2мм)', quantity: 2, unit: 'шт', size: '800x700 мм' },
      { name: 'Уголок нержавеющий 30x30x3', quantity: 12, unit: 'м', size: '-' },
      { name: 'Профиль квадратный 40x40x2', quantity: 8, unit: 'м', size: '-' },
    ]},
    { category: 'Гидравлика', items: [
      { name: 'Форсунка распылительная 360°', quantity: 8, unit: 'шт', size: '1/4"' },
      { name: 'Насос центробежный', quantity: 1, unit: 'шт', size: '2.4 кВт' },
      { name: 'Шланг армированный', quantity: 15, unit: 'м', size: '12 мм' },
      { name: 'Фитинги латунные', quantity: 24, unit: 'шт', size: '1/4"-1/2"' },
      { name: 'Кран шаровой', quantity: 4, unit: 'шт', size: '1/2"' },
      { name: 'Фильтр механической очистки', quantity: 2, unit: 'шт', size: '100 мкм' },
    ]},
    { category: 'Электрика', items: [
      { name: 'ТЭН нагревательный', quantity: 2, unit: 'шт', size: '2 кВт' },
      { name: 'Вентилятор осевой', quantity: 2, unit: 'шт', size: '1200 Вт' },
      { name: 'Панель управления сенсорная', quantity: 1, unit: 'шт', size: '7"' },
      { name: 'Датчик температуры', quantity: 3, unit: 'шт', size: 'PT100' },
      { name: 'Датчик движения инфракрасный', quantity: 2, unit: 'шт', size: '-' },
      { name: 'Кнопка аварийной остановки', quantity: 1, unit: 'шт', size: 'IP65' },
      { name: 'Кабель силовой ПВС 3x2.5', quantity: 20, unit: 'м', size: '-' },
      { name: 'Автоматический выключатель', quantity: 3, unit: 'шт', size: '16А' },
    ]},
    { category: 'Пластик и уплотнители', items: [
      { name: 'Лист поликарбоната ударопрочный', quantity: 1, unit: 'шт', size: '1000x800x8 мм' },
      { name: 'Уплотнитель силиконовый', quantity: 8, unit: 'м', size: '10x10 мм' },
      { name: 'Уплотнительная лента', quantity: 12, unit: 'м', size: '20x5 мм' },
    ]},
    { category: 'Крепёж', items: [
      { name: 'Болты нержавеющие М6', quantity: 100, unit: 'шт', size: '20-40 мм' },
      { name: 'Гайки нержавеющие М6', quantity: 100, unit: 'шт', size: '-' },
      { name: 'Шайбы нержавеющие М6', quantity: 120, unit: 'шт', size: '-' },
      { name: 'Заклёпки вытяжные', quantity: 50, unit: 'шт', size: '4x10 мм' },
      { name: 'Петли дверные усиленные', quantity: 4, unit: 'шт', size: '-' },
      { name: 'Замок-защёлка', quantity: 2, unit: 'шт', size: '-' },
    ]},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-12 text-center animate-fade-in">
          <div className="flex justify-between items-start mb-4">
            <div className="inline-block">
              <Badge variant="outline" className="text-sm px-4 py-1.5 bg-white/80 backdrop-blur">
                <Icon name="FileText" size={14} className="mr-2" />
                Техническая документация
              </Badge>
            </div>
            <a 
              href="/pitch"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="Presentation" size={16} />
              Питч-дек
            </a>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            МОЙ ПЁС
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Автоматическая мойка для собак средних и крупных пород
          </p>
          <p className="text-sm text-muted-foreground">
            Версия прототипа 2.0 | Документ обновлен: 01.11.2025
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {specifications.map((spec, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover-scale border-none bg-white/80 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={spec.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                  <p className="text-lg font-semibold text-gray-900 break-words">{spec.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="design" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto h-auto p-1 bg-white/80 backdrop-blur">
            <TabsTrigger value="design" className="text-sm py-3">
              <Icon name="Box" size={16} className="mr-2" />
              Конструкция
            </TabsTrigger>
            <TabsTrigger value="components" className="text-sm py-3">
              <Icon name="Layers" size={16} className="mr-2" />
              Компоненты
            </TabsTrigger>
            <TabsTrigger value="materials" className="text-sm py-3">
              <Icon name="Wrench" size={16} className="mr-2" />
              Материалы
            </TabsTrigger>
            <TabsTrigger value="bom" className="text-sm py-3">
              <Icon name="ClipboardList" size={16} className="mr-2" />
              Спецификация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden border-none bg-white/80 backdrop-blur">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Icon name="Box" size={28} />
                  Обзор конструкции
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setActiveView('3d')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeView === '3d' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon name="Boxes" size={16} className="inline mr-2" />
                    3D вид
                  </button>
                  <button
                    onClick={() => setActiveView('blueprint')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeView === 'blueprint' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon name="LayoutGrid" size={16} className="inline mr-2" />
                    Чертежи
                  </button>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  {activeView === '3d' ? (
                    <img 
                      src="https://cdn.poehali.dev/files/5d1ff307-cfac-4a80-a533-136509edb1cd.jpg"
                      alt="3D вид МОЙ ПЁС GEN-2"
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <img 
                      src="https://cdn.poehali.dev/files/504f6442-80dd-42d8-9529-1d6769f8a36f.jpeg"
                      alt="Технические чертежи"
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Icon name="Lightbulb" size={20} className="text-accent" />
                      Ключевые особенности
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <span className="text-gray-700">Эргономичная камера для комфортного размещения животного</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <span className="text-gray-700">360° система распыления для равномерной мойки</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <span className="text-gray-700">Прозрачная дверца для контроля процесса</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <span className="text-gray-700">Встроенная система фильтрации и дренажа</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Icon name="Settings" size={20} className="text-accent" />
                      Технические решения
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Sparkles" size={14} className="text-accent" />
                        </div>
                        <span className="text-gray-700">Модульная конструкция для упрощения обслуживания</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Sparkles" size={14} className="text-accent" />
                        </div>
                        <span className="text-gray-700">Антикоррозийное покрытие всех металлических деталей</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Sparkles" size={14} className="text-accent" />
                        </div>
                        <span className="text-gray-700">Система шумоподавления для снижения стресса животного</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Sparkles" size={14} className="text-accent" />
                        </div>
                        <span className="text-gray-700">Энергоэффективная система нагрева воды</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden border-none bg-white/80 backdrop-blur">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Icon name="Layers" size={28} />
                  Спецификация компонентов
                </h2>
              </div>
              
              <div className="p-6 space-y-4">
                {components.map((component, index) => (
                  <div key={index}>
                    <Card className="p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-primary">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {component.name}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {component.status}
                          </Badge>
                        </div>
                        <Icon name="CircleCheck" size={24} className="text-green-500" />
                      </div>
                      <Separator className="my-4" />
                      <ul className="space-y-2">
                        {component.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <Icon name="Minus" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                    {index < components.length - 1 && <div className="h-4" />}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden border-none bg-white/80 backdrop-blur">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Icon name="Wrench" size={28} />
                  Спецификация материалов
                </h2>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Компонент</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Материал</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Толщина</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materials.map((item, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-4 px-4 font-medium text-gray-900">{item.name}</td>
                          <td className="py-4 px-4 text-gray-700">{item.material}</td>
                          <td className="py-4 px-4 text-gray-700">{item.thickness}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-l-primary">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Icon name="Info" size={20} className="text-primary" />
                    Примечания по материалам
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                      <span>Все металлические компоненты проходят антикоррозийную обработку</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                      <span>Материалы соответствуют стандартам безопасности для контакта с животными</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                      <span>Поликарбонат обладает ударопрочностью класса IK08</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                      <span>Уплотнители устойчивы к моющим средствам и дезинфектантам</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="bom" className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden border-none bg-white/80 backdrop-blur">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Icon name="ClipboardList" size={28} />
                  Перечень материалов и элементов (BOM)
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {billOfMaterials.map((category, catIndex) => (
                  <div key={catIndex}>
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <Icon name="Package" size={20} className="text-primary" />
                        {category.category}
                      </h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Наименование</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Кол-во</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Ед. изм.</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Размер/Тип</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.items.map((item, itemIndex) => (
                            <tr 
                              key={itemIndex} 
                              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-3 px-4 text-gray-900">{item.name}</td>
                              <td className="py-3 px-4 text-center font-semibold text-primary">{item.quantity}</td>
                              <td className="py-3 px-4 text-center text-gray-700">{item.unit}</td>
                              <td className="py-3 px-4 text-gray-700">{item.size}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {catIndex < billOfMaterials.length - 1 && <div className="h-6" />}
                  </div>
                ))}

                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600" />
                      Общая статистика
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>Категорий материалов: <strong>{billOfMaterials.length}</strong></li>
                      <li>Всего позиций: <strong>{billOfMaterials.reduce((sum, cat) => sum + cat.items.length, 0)}</strong></li>
                    </ul>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-l-primary">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-primary" />
                      Примечания
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>Указаны минимально необходимые количества</li>
                      <li>Рекомендуется запас 10% по расходникам</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <Separator className="mb-6" />
          <p className="flex items-center justify-center gap-2">
            <Icon name="ShieldCheck" size={16} />
            Документация защищена авторским правом © 2025 МОЙ ПЁС | Версия 2.0
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;