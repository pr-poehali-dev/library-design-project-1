import { useState } from "react";
import Icon from "@/components/ui/icon";

const zones = [
  {
    id: "multstudio",
    title: "Мультстудия",
    subtitle: "Интерактивные панели · Звукоизоляция",
    color: "#FF8C00",
    bgLight: "#FFF8EE",
    accent: "#FF6B00",
    textColor: "#7A3800",
    icon: "Film",
    image: "https://cdn.poehali.dev/projects/ac1a0363-9544-494f-af9f-ae1313345bb6/files/6624a931-2859-40ee-99bb-750adb1008a5.jpg",
    description: "Пространство для создания мультфильмов, анимации и цифрового творчества. Яркие оранжево-жёлтые стены с экологичной краской, интерактивные сенсорные панели на высоте детского роста.",
    features: [
      { icon: "Monitor", label: "Интерактивные сенсорные панели" },
      { icon: "Volume2", label: "Профессиональная звукоизоляция" },
      { icon: "Layers", label: "Модульная мебель-трансформер" },
      { icon: "Lightbulb", label: "Регулируемое LED-освещение" },
      { icon: "Leaf", label: "Экологичная краска без запаха" },
      { icon: "Palette", label: "Акцентные стены: оранжевый, жёлтый" },
    ],
    wallColors: [
      { name: "Основной акцент", hex: "#FF8C00" },
      { name: "Тёплый жёлтый", hex: "#FFD166" },
      { name: "Белый фон", hex: "#FFFDF7" },
    ],
    materials: [
      "Звукопоглощающие панели на потолке и стенах",
      "Акустический ковролин с защитой от загрязнений",
      "Сенсорные дисплеи с антивандальным покрытием",
      "Мягкие накладки на углы мебели",
    ],
  },
  {
    id: "sensory",
    title: "Сенсорная комната",
    subtitle: "Специальное освещение · Тактильные зоны",
    color: "#7B2FBE",
    bgLight: "#F5EEFF",
    accent: "#5A1B9A",
    textColor: "#3A0A6A",
    icon: "Sparkles",
    image: "https://cdn.poehali.dev/projects/ac1a0363-9544-494f-af9f-ae1313345bb6/files/1cbdbe84-084e-4ce8-af50-1dbf08ec4947.jpg",
    description: "Успокаивающее пространство с мягким освещением, тактильными элементами и безопасными материалами для сенсорного развития детей. Фиолетово-лавандовые стены создают атмосферу уюта и безопасности.",
    features: [
      { icon: "Star", label: "Волоконно-оптическое звёздное небо" },
      { icon: "Hand", label: "Тактильные стеновые панели" },
      { icon: "Shield", label: "Безопасные гипоаллергенные материалы" },
      { icon: "Sofa", label: "Мягкие зоны: пуфы, подушки, маты" },
      { icon: "Sun", label: "Специальная терапевтическая подсветка" },
      { icon: "Wind", label: "Тихая вентиляция без сквозняков" },
    ],
    wallColors: [
      { name: "Основной фиолетовый", hex: "#7B2FBE" },
      { name: "Лавандовый", hex: "#C4A8E8" },
      { name: "Мягкий кремовый", hex: "#F5EEFF" },
    ],
    materials: [
      "Мягкие стеновые маты с текстурными вставками",
      "Гипоаллергенный ковер с высоким ворсом",
      "Пузырьковые колонны с цветовой подсветкой",
      "Безопасные кресла-мешки из экокожи",
    ],
  },
  {
    id: "gameroom",
    title: "Игротека",
    subtitle: "Модульная мебель · Активные игры",
    color: "#2E8B57",
    bgLight: "#EEFFF4",
    accent: "#1A6B3C",
    textColor: "#0A3D20",
    icon: "Gamepad2",
    image: "https://cdn.poehali.dev/projects/ac1a0363-9544-494f-af9f-ae1313345bb6/files/c64b1bdf-7ef2-49be-9fb5-1f460abe2fa8.jpg",
    description: "Динамичное пространство для настольных игр, активного обучения и командного взаимодействия. Зелёные акцентные стены и модульная мебель, которую легко переставить под любой формат занятия.",
    features: [
      { icon: "Move", label: "Трансформируемая модульная мебель" },
      { icon: "Grid3x3", label: "Интерактивные игровые панели" },
      { icon: "Users", label: "Зоны для групп от 2 до 20 детей" },
      { icon: "BookOpen", label: "Стеллажи с настольными играми" },
      { icon: "Zap", label: "Яркое дневное освещение" },
      { icon: "Leaf", label: "Резиновое антискользящее покрытие" },
    ],
    wallColors: [
      { name: "Зелёный акцент", hex: "#2E8B57" },
      { name: "Лаймовый", hex: "#90EE90" },
      { name: "Светлый фон", hex: "#EEFFF4" },
    ],
    materials: [
      "Цветное резиновое покрытие пола (безопасное при падении)",
      "Складные столы и стулья разной высоты",
      "Открытые стеллажи с закруглёнными краями",
      "Магнитно-маркерные акцентные стены",
    ],
  },
];

const generalSpecs = [
  { icon: "Leaf", title: "Экологичная краска", desc: "Нулевой уровень ЛОС, безопасно для детей" },
  { icon: "Shield", title: "Безопасные материалы", desc: "Все сертифицированы для детских учреждений" },
  { icon: "Layers", title: "Модульность", desc: "Мебель адаптируется под любой формат" },
  { icon: "Zap", title: "Интерактивность", desc: "Панели в каждой зоне для вовлечения" },
];

export default function Index() {
  const [activeZone, setActiveZone] = useState<string>("multstudio");
  const zone = zones.find((z) => z.id === activeZone)!;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-purple-500 rounded-xl flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Детская библиотека</h1>
              <p className="text-xs text-gray-500">Концепция дизайна пространства</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              3 зоны · Первая версия
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Пространство для роста и творчества
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Три функциональные зоны с уникальным дизайном, экологичными материалами и современным интерактивным оборудованием
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {generalSpecs.map((spec) => (
              <div key={spec.title} className="bg-white/10 rounded-xl p-3 text-center">
                <Icon name={spec.icon} size={24} className="text-white mx-auto mb-1" />
                <div className="text-sm font-semibold">{spec.title}</div>
                <div className="text-xs text-gray-400 mt-0.5">{spec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Tabs */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {zones.map((z) => (
            <button
              key={z.id}
              onClick={() => setActiveZone(z.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm whitespace-nowrap transition-all ${
                activeZone === z.id
                  ? "shadow-lg scale-105 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
              style={activeZone === z.id ? { backgroundColor: z.color } : {}}
            >
              <Icon name={z.icon} size={16} />
              {z.title}
            </button>
          ))}
        </div>

        {/* Zone Detail */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src={zone.image}
              alt={zone.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div
            className="rounded-3xl p-6"
            style={{ backgroundColor: zone.bgLight }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: zone.color }}
              >
                <Icon name={zone.icon} size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: zone.textColor }}>
                  {zone.title}
                </h3>
                <p className="text-sm" style={{ color: zone.accent }}>
                  {zone.subtitle}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-5">{zone.description}</p>

            {/* Wall Colors */}
            <div className="mb-5">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">Цвета стен (экологичная краска)</h4>
              <div className="flex gap-2 flex-wrap">
                {zone.wallColors.map((c) => (
                  <div key={c.hex} className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 shadow-sm">
                    <div
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs font-medium text-gray-700">{c.name}</span>
                    <span className="text-xs text-gray-400">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2">
              {zone.features.map((f) => (
                <div key={f.label} className="flex items-start gap-2 bg-white rounded-xl p-2.5 shadow-sm">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: zone.bgLight }}
                  >
                    <Icon name={f.icon} size={14} style={{ color: zone.color }} />
                  </div>
                  <span className="text-xs text-gray-700 leading-tight">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-8">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="Package" size={18} className="text-gray-500" />
            Материалы и оборудование — {zone.title}
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {zone.materials.map((m) => (
              <div key={m} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                  style={{ backgroundColor: zone.color }}
                />
                <span className="text-sm text-gray-700">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Zones Overview */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h4 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Icon name="Map" size={18} className="text-gray-500" />
            Все зоны — обзор
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className="text-left p-4 rounded-2xl border-2 transition-all hover:shadow-md"
                style={{
                  borderColor: activeZone === z.id ? z.color : "#e5e7eb",
                  backgroundColor: activeZone === z.id ? z.bgLight : "white",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: z.color }}
                  >
                    <Icon name={z.icon} size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-900">{z.title}</span>
                </div>
                <div className="flex gap-1.5">
                  {z.wallColors.map((c) => (
                    <div
                      key={c.hex}
                      className="w-5 h-5 rounded-full border-2 border-white shadow"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">{z.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Концепция дизайна детской библиотеки · Версия 1.0
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Модульная мебель · Экологичная краска · Интерактивные панели · Безопасные материалы
          </p>
        </div>
      </footer>
    </div>
  );
}