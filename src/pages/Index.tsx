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
            План помещения · 115,2 м²
          </h4>
          <p className="text-xs text-gray-400 mb-5">Нажмите на зону, чтобы посмотреть детали</p>

          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 960 620"
              className="w-full max-w-4xl mx-auto"
              style={{ minWidth: 380 }}
            >
              {/*
                ПЛАН ПОМЕЩЕНИЯ 115,2 м² (16м × 7,2м)
                Ориентация: левая стена = вход, правая стена = 6 окон
                Масштаб: 1м ≈ 52px   →   16м × 7.2м = 832 × 374px
                SVG canvas: 960×620, поле плана: x=60..892, y=80..454
                Ширина плана (X): 832px = 16м
                Высота плана (Y): 374px = 7.2м

                Зоны (слева направо, сверху вниз):
                  Левая стена (x=60):
                    [Вход снизу, x=60, y≈380]
                    Стеллажи книг:  x=60,  y=80,  w=100, h=374  (вдоль левой стены)
                    Рабочее место:  x=60,  y=290, w=100, h=164  (справа от входа, вдоль левой стены снизу)
                  Верхняя часть (y=80..230):
                    Мультстудия:    x=160, y=80,  w=170, h=150
                    Сем. чтение:    x=330, y=80,  w=170, h=150  (угол верх-центр)
                    Игротека:       x=500, y=80,  w=180, h=150  (верхний правый угол)
                  Нижняя часть (y=270..454):
                    Сенсорная:      x=160, y=270, w=170, h=184  (правая стена снизу — нет, по описанию "правая стена от входа")
                    Читалкин:       x=330, y=270, w=180, h=184
                  Центр:
                    Читальный зал:  x=500, y=270, w=392, h=184  (середина + вниз-право)
                    ... пересмотрено ниже по реальной схеме
              */}

              {/* ── Фон пола ── */}
              <rect x="60" y="80" width="832" height="374" fill="#f9fafb" />

              {/* ── Плиточная сетка ── */}
              {Array.from({ length: 32 }).map((_, i) => (
                <line key={`gv${i}`} x1={60 + (i+1)*26} y1="80" x2={60 + (i+1)*26} y2="454" stroke="#e5e7eb" strokeWidth="0.4" />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`gh${i}`} x1="60" y1={80 + (i+1)*26} x2="892" y2={80 + (i+1)*26} stroke="#e5e7eb" strokeWidth="0.4" />
              ))}

              {/* ── Внешние стены ── */}
              {/* Верхняя стена (дальняя — с окнами) */}
              <rect x="57" y="77" width="355" height="6" fill="#374151" rx="2"/>
              <rect x="538" y="77" width="357" height="6" fill="#374151" rx="2"/>
              {/* Нижняя стена */}
              <rect x="57" y="451" width="838" height="6" fill="#374151" rx="2"/>
              {/* Левая стена (с проёмом входа) */}
              <rect x="57" y="77" width="6" height="253" fill="#374151" rx="2"/>
              <rect x="57" y="360" width="6" height="97" fill="#374151" rx="2"/>
              {/* Правая торцевая стена */}
              <rect x="889" y="77" width="6" height="378" fill="#374151" rx="2"/>

              {/* ── 6 Окон (верхняя длинная стена — напротив входа) ── */}
              {[0,1,2,3,4,5].map((i) => {
                const wx = 412 + i * 21;
                return (
                  <g key={`win${i}`}>
                    <rect x={wx} y="74" width="16" height="9" rx="1"
                      fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1"/>
                    <line x1={wx+8} y1="74" x2={wx+8} y2="83" stroke="#7DD3FC" strokeWidth="0.7"/>
                    {/* Световой луч внутрь */}
                    <line x1={wx+3} y1="83" x2={wx+3} y2="120" stroke="#BAE6FD" strokeWidth="0.5" opacity="0.5"/>
                    <line x1={wx+13} y1="83" x2={wx+13} y2="120" stroke="#BAE6FD" strokeWidth="0.5" opacity="0.5"/>
                  </g>
                );
              })}
              <text x="538" y="68" textAnchor="start" fontSize="8" fill="#0EA5E9">← 6 окон</text>

              {/* ── Вход (левая стена, середина по высоте) ── */}
              <rect x="54" y="330" width="9" height="52" fill="#f9fafb"/>
              <path d="M60 330 Q85 356 60 382" fill="none" stroke="#374151" strokeWidth="1.2" strokeDasharray="4 2"/>
              <text x="30" y="358" textAnchor="middle" fontSize="9" fontWeight="600" fill="#374151">ВХОД</text>
              <text x="30" y="370" textAnchor="middle" fontSize="8" fill="#6b7280">⟶</text>

              {/* ══════════════════════════════════════════
                  ЗОНА 1: СТЕЛЛАЖИ С КНИГАМИ
                  Левая стена, вдоль неё сверху — 6 стеллажей
              ══════════════════════════════════════════ */}
              <g style={{ cursor: "default" }}>
                <rect x="62" y="82" width="95" height="245" rx="0"
                  fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5"/>
                {/* 6 стеллажей */}
                {[0,1,2,3,4,5].map(i => (
                  <g key={`shelf${i}`}>
                    <rect x="66" y={90 + i*38} width="83" height="30" rx="3"
                      fill="#FDE68A" stroke="#D97706" strokeWidth="1" opacity="0.8"/>
                    {/* полки */}
                    <line x1="66" y1={90+i*38+10} x2="149" y2={90+i*38+10} stroke="#B45309" strokeWidth="0.6"/>
                    <line x1="66" y1={90+i*38+20} x2="149" y2={90+i*38+20} stroke="#B45309" strokeWidth="0.6"/>
                    {/* книги */}
                    {[0,1,2,3,4,5,6].map(j => (
                      <rect key={j} x={68+j*11} y={90+i*38+2} width="9" height="8" rx="1"
                        fill={["#EF4444","#3B82F6","#10B981","#F59E0B","#8B5CF6","#EC4899","#6366F1"][j]}
                        opacity="0.7"/>
                    ))}
                  </g>
                ))}
                <text x="109" y="347" textAnchor="middle" fontSize="8" fontWeight="700" fill="#92400E">📚 Стеллажи</text>
                <text x="109" y="358" textAnchor="middle" fontSize="7" fill="#B45309">6 стеллажей</text>
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 2: РАБОЧЕЕ МЕСТО БИБЛИОТЕКАРЯ
                  Справа от входа (правая нижняя часть левой стены)
              ══════════════════════════════════════════ */}
              <g style={{ cursor: "default" }}>
                <rect x="62" y="332" width="95" height="118" rx="0"
                  fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5"/>
                {/* Стол Г-образный */}
                <rect x="70" y="360" width="55" height="28" rx="3" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1"/>
                <rect x="90" y="345" width="28" height="44" rx="3" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1"/>
                {/* Монитор */}
                <rect x="97" y="348" width="16" height="11" rx="1" fill="#0284C7" opacity="0.6"/>
                {/* Кресло */}
                <circle cx="85" cy="400" r="9" fill="#0EA5E9" opacity="0.35"/>
                <text x="109" y="430" textAnchor="middle" fontSize="8" fontWeight="700" fill="#075985">🖥 Библиотекарь</text>
                <text x="109" y="441" textAnchor="middle" fontSize="7" fill="#0284C7">рабочее место</text>
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 3: МУЛЬТСТУДИЯ
                  Левая часть, верхняя половина, после стеллажей
              ══════════════════════════════════════════ */}
              <g onClick={() => setActiveZone("multstudio")} style={{ cursor: "pointer" }}>
                <rect x="157" y="82" width="185" height="190" rx="0"
                  fill={activeZone === "multstudio" ? "#FFEDD5" : "#FFF7ED"}
                  stroke="#FF8C00" strokeWidth={activeZone === "multstudio" ? 2.5 : 1.5}/>
                {/* Экран на стене (верхняя) */}
                <rect x="175" y="86" width="130" height="50" rx="4" fill="#FF8C00" opacity="0.15" stroke="#FF8C00" strokeWidth="1.2"/>
                <rect x="179" y="89" width="122" height="44" rx="3" fill="#FF8C00" opacity="0.18"/>
                <text x="240" y="114" textAnchor="middle" fontSize="7" fill="#7A3800" opacity="0.8">экран</text>
                {/* Столы */}
                <rect x="170" y="152" width="48" height="32" rx="3" fill="#FFD166" opacity="0.7" stroke="#FF8C00" strokeWidth="1"/>
                <rect x="230" y="152" width="48" height="32" rx="3" fill="#FFD166" opacity="0.7" stroke="#FF8C00" strokeWidth="1"/>
                <rect x="290" y="152" width="44" height="32" rx="3" fill="#FFD166" opacity="0.7" stroke="#FF8C00" strokeWidth="1"/>
                {/* Стулья */}
                {[178,194,238,254,297,312].map((x,i) => (
                  <circle key={i} cx={x} cy="195" r="6" fill="#FF8C00" opacity="0.3"/>
                ))}
                {/* Звукоизоляционные панели на левой стене зоны */}
                {[88,108,128,148,168].map((y,i) => (
                  <rect key={i} x="157" y={y} width="5" height="14" rx="2" fill="#FF8C00" opacity="0.5"/>
                ))}
                {/* Метка */}
                <text x="249" y="133" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7A3800">🎬 Мультстудия</text>
                <text x="249" y="146" textAnchor="middle" fontSize="8" fill="#FF6B00">~15 м²</text>
                {activeZone === "multstudio" && (
                  <rect x="157" y="82" width="185" height="190" fill="none" stroke="#FF8C00" strokeWidth="2.5" strokeDasharray="7 3" opacity="0.7"/>
                )}
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 4: ЗОНА СЕМЕЙНОГО ЧТЕНИЯ
                  Центр-верх, угол
              ══════════════════════════════════════════ */}
              <g style={{ cursor: "default" }}>
                <rect x="342" y="82" width="175" height="190" rx="0"
                  fill="#FFF1F2" stroke="#F43F5E" strokeWidth="1.5"/>
                {/* Диван/кресла */}
                <rect x="358" y="200" width="110" height="30" rx="8" fill="#FDA4AF" opacity="0.6" stroke="#F43F5E" strokeWidth="1"/>
                <rect x="358" y="170" width="30" height="62" rx="8" fill="#FDA4AF" opacity="0.5" stroke="#F43F5E" strokeWidth="1"/>
                <rect x="440" y="170" width="30" height="62" rx="8" fill="#FDA4AF" opacity="0.5" stroke="#F43F5E" strokeWidth="1"/>
                {/* Торшер */}
                <circle cx="494" cy="105" r="7" fill="#FCA5A5" opacity="0.5"/>
                <line x1="494" y1="112" x2="494" y2="130" stroke="#F43F5E" strokeWidth="1.5"/>
                <rect x="490" y="130" width="8" height="5" rx="1" fill="#F43F5E" opacity="0.5"/>
                {/* Ковёр */}
                <ellipse cx="413" cy="215" rx="55" ry="25" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="5 3" opacity="0.5"/>
                {/* Метка */}
                <text x="429" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9F1239">🏠 Семейное</text>
                <text x="429" y="121" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9F1239">чтение</text>
                <text x="429" y="135" textAnchor="middle" fontSize="7.5" fill="#E11D48">~14 м²</text>
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 5: ИГРОТЕКА
                  Правый верхний угол
              ══════════════════════════════════════════ */}
              <g onClick={() => setActiveZone("gameroom")} style={{ cursor: "pointer" }}>
                <rect x="517" y="82" width="372" height="190" rx="0"
                  fill={activeZone === "gameroom" ? "#DCFCE7" : "#F0FDF4"}
                  stroke="#2E8B57" strokeWidth={activeZone === "gameroom" ? 2.5 : 1.5}/>
                {/* Стеллажи с играми у правой стены */}
                <rect x="878" y="86" width="9" height="180" rx="2" fill="#2E8B57" opacity="0.35"/>
                {[95,118,141,164,187,210,233].map((y,i) => (
                  <rect key={i} x="869" y={y} width="19" height="8" rx="1" fill="#86EFAC" opacity="0.7"/>
                ))}
                {/* Игровые столы */}
                <rect x="535" y="120" width="58" height="40" rx="4" fill="#86EFAC" opacity="0.6" stroke="#2E8B57" strokeWidth="1"/>
                <rect x="615" y="120" width="58" height="40" rx="4" fill="#86EFAC" opacity="0.6" stroke="#2E8B57" strokeWidth="1"/>
                <rect x="695" y="120" width="58" height="40" rx="4" fill="#86EFAC" opacity="0.6" stroke="#2E8B57" strokeWidth="1"/>
                {/* Стулья */}
                {[544,563,624,643,704,723].map((x,i) => (
                  <circle key={i} cx={x} cy="172" r="7" fill="#2E8B57" opacity="0.25"/>
                ))}
                {[544,563,624,643,704,723].map((x,i) => (
                  <circle key={i} cx={x} cy="108" r="7" fill="#2E8B57" opacity="0.25"/>
                ))}
                {/* Маркерная стена (верх) */}
                <rect x="517" y="82" width="372" height="7" rx="0" fill="#2E8B57" opacity="0.3"/>
                <text x="703" y="95" textAnchor="middle" fontSize="7" fill="#166534">маркерная стена</text>
                {/* Метка */}
                <text x="680" y="108" textAnchor="middle" fontSize="11" fontWeight="700" fill="#14532D">🎮 Игротека</text>
                <text x="703" y="188" textAnchor="middle" fontSize="7.5" fill="#166534">~25 м²</text>
                {activeZone === "gameroom" && (
                  <rect x="517" y="82" width="372" height="190" fill="none" stroke="#2E8B57" strokeWidth="2.5" strokeDasharray="7 3" opacity="0.7"/>
                )}
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 6: ЧИТАЛЬНЫЙ ЗАЛ + МЕРОПРИЯТИЯ
                  Центр помещения (большая зона)
              ══════════════════════════════════════════ */}
              <g style={{ cursor: "default" }}>
                <rect x="157" y="272" width="535" height="180" rx="0"
                  fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" strokeDasharray="6 3"/>
                {/* Столы читального зала — 3 ряда */}
                {[0,1,2].map(row => (
                  [0,1,2,3].map(col => (
                    <g key={`t${row}${col}`}>
                      <rect x={175 + col*120} y={285 + row*48} width="80" height="28" rx="3"
                        fill="#CBD5E1" opacity="0.6" stroke="#64748B" strokeWidth="0.8"/>
                      <circle cx={185 + col*120} cy={322 + row*48} r="7" fill="#94A3B8" opacity="0.4"/>
                      <circle cx={205 + col*120} cy={322 + row*48} r="7" fill="#94A3B8" opacity="0.4"/>
                      <circle cx={225 + col*120} cy={322 + row*48} r="7" fill="#94A3B8" opacity="0.4"/>
                      <circle cx={245 + col*120} cy={322 + row*48} r="7" fill="#94A3B8" opacity="0.4"/>
                    </g>
                  ))
                ))}
                {/* Сцена/экран для мероприятий */}
                <rect x="170" y="278" width="95" height="18" rx="3" fill="#64748B" opacity="0.2" stroke="#64748B" strokeWidth="1"/>
                <text x="217" y="291" textAnchor="middle" fontSize="6.5" fill="#475569">сцена / экран</text>
                {/* Метка */}
                <text x="420" y="422" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">📖 Читальный зал и мероприятия</text>
                <text x="420" y="436" textAnchor="middle" fontSize="7.5" fill="#64748B">~38 м²</text>
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 7: СЕНСОРНАЯ КОМНАТА
                  Правая сторона от входа (правый нижний блок)
              ══════════════════════════════════════════ */}
              <g onClick={() => setActiveZone("sensory")} style={{ cursor: "pointer" }}>
                <rect x="692" y="272" width="197" height="110" rx="0"
                  fill={activeZone === "sensory" ? "#EDE9FE" : "#F5F3FF"}
                  stroke="#7B2FBE" strokeWidth={activeZone === "sensory" ? 2.5 : 1.5}/>
                {/* Пузырьковые колонны */}
                <rect x="702" y="280" width="14" height="70" rx="7" fill="#7B2FBE" opacity="0.18" stroke="#7B2FBE" strokeWidth="1"/>
                <rect x="722" y="280" width="14" height="70" rx="7" fill="#C4A8E8" opacity="0.25" stroke="#7B2FBE" strokeWidth="1"/>
                {/* Пуфы */}
                <circle cx="790" cy="315" r="18" fill="#C4A8E8" opacity="0.35" stroke="#7B2FBE" strokeWidth="1"/>
                <circle cx="815" cy="325" r="13" fill="#7B2FBE" opacity="0.2"/>
                <circle cx="770" cy="328" r="11" fill="#C4A8E8" opacity="0.4"/>
                {/* Звёзды потолок */}
                {[[750,276],[770,279],[790,275],[830,278],[855,276],[870,280]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="1.5" fill="#7B2FBE" opacity="0.6"/>
                ))}
                {/* Окна (правая стена) */}
                <text x="790" y="359" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4C1D95">✨ Сенсорная</text>
                <text x="790" y="371" textAnchor="middle" fontSize="7.5" fill="#5A1B9A">~8 м²</text>
                {activeZone === "sensory" && (
                  <rect x="692" y="272" width="197" height="110" fill="none" stroke="#7B2FBE" strokeWidth="2.5" strokeDasharray="7 3" opacity="0.7"/>
                )}
              </g>

              {/* ══════════════════════════════════════════
                  ЗОНА 8: ЗАЛ ЧИТАЛКИН
                  Правая нижняя часть
              ══════════════════════════════════════════ */}
              <g style={{ cursor: "default" }}>
                <rect x="692" y="382" width="197" height="70" rx="0"
                  fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.5"/>
                {/* Мягкие пуфы-подушки */}
                <circle cx="720" cy="415" r="12" fill="#FED7AA" opacity="0.7" stroke="#EA580C" strokeWidth="1"/>
                <circle cx="752" cy="415" r="12" fill="#FED7AA" opacity="0.7" stroke="#EA580C" strokeWidth="1"/>
                <circle cx="784" cy="415" r="12" fill="#FED7AA" opacity="0.7" stroke="#EA580C" strokeWidth="1"/>
                <circle cx="816" cy="415" r="12" fill="#FED7AA" opacity="0.7" stroke="#EA580C" strokeWidth="1"/>
                <circle cx="848" cy="415" r="12" fill="#FED7AA" opacity="0.7" stroke="#EA580C" strokeWidth="1"/>
                {/* Низкий столик */}
                <rect x="710" y="432" width="160" height="12" rx="4" fill="#FDBA74" opacity="0.5" stroke="#EA580C" strokeWidth="0.8"/>
                <text x="790" y="445" textAnchor="middle" fontSize="8" fontWeight="700" fill="#9A3412">📕 Зал «Читалкин»</text>
              </g>

              {/* ── Размерные линии ── */}
              {/* Ширина (16м) */}
              <line x1="60" y1="465" x2="892" y2="465" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="60" y1="461" x2="60" y2="469" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="892" y1="461" x2="892" y2="469" stroke="#9CA3AF" strokeWidth="1"/>
              <text x="476" y="477" textAnchor="middle" fontSize="9" fill="#6B7280">16 м</text>
              {/* Высота (7.2м) */}
              <line x1="44" y1="80" x2="44" y2="454" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="40" y1="80" x2="48" y2="80" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="40" y1="454" x2="48" y2="454" stroke="#9CA3AF" strokeWidth="1"/>
              <text x="34" y="270" textAnchor="middle" fontSize="9" fill="#6B7280" transform="rotate(-90,34,270)">7,2 м</text>
              {/* Метка площади */}
              <text x="476" y="500" textAnchor="middle" fontSize="10" fontWeight="600" fill="#374151">Общая площадь: 115,2 м²</text>

              {/* ── Компас / север ── */}
              <text x="920" y="68" textAnchor="middle" fontSize="9" fill="#9CA3AF">С</text>
              <line x1="920" y1="72" x2="920" y2="88" stroke="#9CA3AF" strokeWidth="1"/>
              <polygon points="920,72 916,82 920,80 924,82" fill="#9CA3AF"/>
            </svg>
          </div>

          {/* Легенда */}
          <div className="flex flex-wrap gap-2 mt-5 justify-center">
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
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-600 bg-amber-50 border-2 border-amber-300">
              <span>📚</span> Стеллажи с книгами
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-600 bg-sky-50 border-2 border-sky-300">
              <span>🖥</span> Рабочее место библиотекаря
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-600 bg-rose-50 border-2 border-rose-300">
              <span>🏠</span> Зона семейного чтения
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-600 bg-slate-50 border-2 border-slate-300">
              <span>📖</span> Читальный зал и мероприятия
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-600 bg-orange-50 border-2 border-orange-300">
              <span>📕</span> Зал «Читалкин»
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-500 bg-gray-100 border-2 border-gray-200">
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