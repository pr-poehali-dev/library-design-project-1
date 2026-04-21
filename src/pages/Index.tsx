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

        {/* Floor Plan */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
            <Icon name="Map" size={18} className="text-gray-500" />
            План помещения
          </h4>
          <p className="text-xs text-gray-400 mb-5">Нажмите на зону, чтобы посмотреть детали</p>

          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 800 520"
              className="w-full max-w-3xl mx-auto"
              style={{ minWidth: 320 }}
            >
              {/* Outer walls */}
              <rect x="30" y="30" width="740" height="460" rx="12" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="3" />

              {/* Grid lines (floor tiles feel) */}
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`v${i}`} x1={30 + (i + 1) * 50} y1="30" x2={30 + (i + 1) * 50} y2="490" stroke="#e5e7eb" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h${i}`} x1="30" y1={30 + (i + 1) * 50} x2="770" y2={30 + (i + 1) * 50} stroke="#e5e7eb" strokeWidth="0.5" />
              ))}

              {/* === МУЛЬТСТУДИЯ (левая верхняя) === */}
              <g
                onClick={() => setActiveZone("multstudio")}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x="40" y="40" width="310" height="220" rx="10"
                  fill={activeZone === "multstudio" ? "#FFEECC" : "#FFF8EE"}
                  stroke="#FF8C00"
                  strokeWidth={activeZone === "multstudio" ? 3 : 1.5}
                  style={{ transition: "all 0.2s" }}
                />
                {/* Интерактивные панели — левая стена */}
                <rect x="40" y="70" width="8" height="80" rx="3" fill="#FF8C00" opacity="0.7" />
                <rect x="40" y="160" width="8" height="40" rx="3" fill="#FFD166" opacity="0.7" />
                {/* Экран */}
                <rect x="70" y="58" width="120" height="70" rx="6" fill="#FF8C00" opacity="0.15" stroke="#FF8C00" strokeWidth="1.5" />
                <rect x="78" y="64" width="104" height="52" rx="4" fill="#FF8C00" opacity="0.2" />
                {/* Столы */}
                <rect x="70" y="155" width="55" height="35" rx="4" fill="#FFD166" opacity="0.6" stroke="#FF8C00" strokeWidth="1" />
                <rect x="140" y="155" width="55" height="35" rx="4" fill="#FFD166" opacity="0.6" stroke="#FF8C00" strokeWidth="1" />
                <rect x="210" y="155" width="55" height="35" rx="4" fill="#FFD166" opacity="0.6" stroke="#FF8C00" strokeWidth="1" />
                {/* Стулья */}
                {[70, 87, 140, 157, 210, 227].map((x, i) => (
                  <circle key={i} cx={x + 10} cy="202" r="6" fill="#FF8C00" opacity="0.35" />
                ))}
                {/* Метка */}
                <text x="215" y="90" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7A3800">Мультстудия</text>
                <text x="215" y="108" textAnchor="middle" fontSize="9" fill="#FF6B00">~45 м²</text>
                {/* Иконка */}
                <circle cx="285" cy="200" r="16" fill="#FF8C00" opacity="0.9" />
                <text x="285" y="205" textAnchor="middle" fontSize="14" fill="white">🎬</text>
                {/* Подсветка активной зоны */}
                {activeZone === "multstudio" && (
                  <rect x="40" y="40" width="310" height="220" rx="10" fill="none" stroke="#FF8C00" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />
                )}
              </g>

              {/* === СЕНСОРНАЯ КОМНАТА (левая нижняя) === */}
              <g
                onClick={() => setActiveZone("sensory")}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x="40" y="270" width="310" height="210" rx="10"
                  fill={activeZone === "sensory" ? "#EDD9FF" : "#F5EEFF"}
                  stroke="#7B2FBE"
                  strokeWidth={activeZone === "sensory" ? 3 : 1.5}
                  style={{ transition: "all 0.2s" }}
                />
                {/* Пузырьковые колонны */}
                <rect x="55" y="285" width="18" height="100" rx="9" fill="#7B2FBE" opacity="0.2" stroke="#7B2FBE" strokeWidth="1" />
                <rect x="82" y="285" width="18" height="100" rx="9" fill="#C4A8E8" opacity="0.3" stroke="#7B2FBE" strokeWidth="1" />
                {/* Пуфы и мягкая зона */}
                <ellipse cx="200" cy="360" rx="45" ry="35" fill="#C4A8E8" opacity="0.4" stroke="#7B2FBE" strokeWidth="1" />
                <circle cx="185" cy="352" r="14" fill="#7B2FBE" opacity="0.25" />
                <circle cx="210" cy="365" r="12" fill="#C4A8E8" opacity="0.5" />
                <circle cx="195" cy="375" r="10" fill="#7B2FBE" opacity="0.2" />
                {/* Звёздное небо (точки на потолке) */}
                {[[120,285],[150,290],[170,283],[240,288],[270,285],[300,290],[310,283]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="2" fill="#7B2FBE" opacity="0.5" />
                ))}
                {/* Тактильные панели — нижняя стена */}
                <rect x="110" y="470" width="50" height="8" rx="3" fill="#7B2FBE" opacity="0.5" />
                <rect x="170" y="470" width="50" height="8" rx="3" fill="#C4A8E8" opacity="0.6" />
                <rect x="230" y="470" width="50" height="8" rx="3" fill="#7B2FBE" opacity="0.4" />
                {/* Метка */}
                <text x="215" y="306" textAnchor="middle" fontSize="13" fontWeight="700" fill="#3A0A6A">Сенсорная комната</text>
                <text x="215" y="322" textAnchor="middle" fontSize="9" fill="#5A1B9A">~30 м²</text>
                {/* Иконка */}
                <circle cx="305" cy="430" r="16" fill="#7B2FBE" opacity="0.9" />
                <text x="305" y="435" textAnchor="middle" fontSize="14" fill="white">✨</text>
                {activeZone === "sensory" && (
                  <rect x="40" y="270" width="310" height="210" rx="10" fill="none" stroke="#7B2FBE" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />
                )}
              </g>

              {/* === ИГРОТЕКА (правая большая) === */}
              <g
                onClick={() => setActiveZone("gameroom")}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x="360" y="40" width="370" height="440" rx="10"
                  fill={activeZone === "gameroom" ? "#CCFFDD" : "#EEFFF4"}
                  stroke="#2E8B57"
                  strokeWidth={activeZone === "gameroom" ? 3 : 1.5}
                  style={{ transition: "all 0.2s" }}
                />
                {/* Стеллажи — правая стена */}
                <rect x="718" y="55" width="12" height="200" rx="3" fill="#2E8B57" opacity="0.3" />
                {[70,95,120,145,170,195,220].map((y, i) => (
                  <rect key={i} x="718" y={y} width="12" height="8" rx="1" fill="#90EE90" opacity="0.6" />
                ))}
                {/* Игровые столы — модульные блоки */}
                <rect x="380" y="80" width="70" height="50" rx="6" fill="#2E8B57" opacity="0.15" stroke="#2E8B57" strokeWidth="1.5" />
                <rect x="465" y="80" width="70" height="50" rx="6" fill="#2E8B57" opacity="0.15" stroke="#2E8B57" strokeWidth="1.5" />
                <rect x="550" y="80" width="70" height="50" rx="6" fill="#2E8B57" opacity="0.15" stroke="#2E8B57" strokeWidth="1.5" />
                {/* Стулья вокруг столов */}
                {[395,415,480,500,565,585].map((x, i) => (
                  <circle key={i} cx={x} cy="143" r="7" fill="#2E8B57" opacity="0.25" />
                ))}
                {[395,415,480,500,565,585].map((x, i) => (
                  <circle key={i} cx={x} cy="68" r="7" fill="#2E8B57" opacity="0.25" />
                ))}
                {/* Игровой центральный ковёр */}
                <ellipse cx="545" cy="320" rx="130" ry="100" fill="#90EE90" opacity="0.25" stroke="#2E8B57" strokeWidth="1" strokeDasharray="6 3" />
                {/* Интерактивная панель на полу */}
                <rect x="430" y="280" width="110" height="80" rx="8" fill="#2E8B57" opacity="0.12" stroke="#2E8B57" strokeWidth="1.5" />
                <text x="485" y="316" textAnchor="middle" fontSize="8" fill="#1A6B3C" opacity="0.8">интерактивный</text>
                <text x="485" y="328" textAnchor="middle" fontSize="8" fill="#1A6B3C" opacity="0.8">пол</text>
                {/* Магнитная стена — верхняя */}
                <rect x="370" y="40" width="360" height="8" rx="3" fill="#2E8B57" opacity="0.4" />
                <text x="550" y="52" textAnchor="middle" fontSize="8" fill="#1A6B3C">маркерная стена</text>
                {/* Метка */}
                <text x="545" y="210" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0A3D20">Игротека</text>
                <text x="545" y="230" textAnchor="middle" fontSize="9" fill="#1A6B3C">~80 м²</text>
                {/* Иконка */}
                <circle cx="690" cy="430" r="16" fill="#2E8B57" opacity="0.9" />
                <text x="690" y="435" textAnchor="middle" fontSize="14" fill="white">🎮</text>
                {activeZone === "gameroom" && (
                  <rect x="360" y="40" width="370" height="440" rx="10" fill="none" stroke="#2E8B57" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />
                )}
              </g>

              {/* Входная дверь */}
              <rect x="340" y="480" width="60" height="10" rx="4" fill="#374151" />
              <path d="M340 480 Q370 460 400 480" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="370" y="510" textAnchor="middle" fontSize="10" fill="#6b7280">Вход</text>

              {/* Коридор между зонами */}
              <line x1="350" y1="30" x2="350" y2="490" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="40" y1="260" x2="350" y2="260" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 4" />

              {/* Размеры */}
              <text x="195" y="22" textAnchor="middle" fontSize="9" fill="#9ca3af">~14 м</text>
              <text x="545" y="22" textAnchor="middle" fontSize="9" fill="#9ca3af">~20 м</text>
              <text x="18" y="155" textAnchor="middle" fontSize="9" fill="#9ca3af" transform="rotate(-90, 18, 155)">~12 м</text>
            </svg>
          </div>

          {/* Легенда */}
          <div className="flex flex-wrap gap-3 mt-5 justify-center">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all"
                style={{
                  borderColor: z.color,
                  backgroundColor: activeZone === z.id ? z.color : z.bgLight,
                  color: activeZone === z.id ? "white" : z.textColor,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeZone === z.id ? "white" : z.color }} />
                {z.title}
              </button>
            ))}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-500 bg-gray-100">
              <Icon name="DoorOpen" size={12} />
              Вход
            </div>
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