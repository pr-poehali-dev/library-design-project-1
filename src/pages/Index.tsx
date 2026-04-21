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
              viewBox="0 0 960 480"
              className="w-full max-w-4xl mx-auto"
              style={{ minWidth: 380 }}
            >
              {/*
                ПЛАН 115,2 м²  (16 м × 7,2 м)
                canvas 960 × 560
                Поле плана: x=80..880 (800px=16м, 1м=50px), y=60..420 (360px=7,2м, 1м=50px)

                СТЕНЫ:
                  Левая  (x=80)  — ВХОД посередине (y≈215..265)
                  Правая (x=880) — глухая
                  Верхняя (y=60) — глухая
                  Нижняя (y=420) — 6 ОКОН (правая сторона от входа)

                ЗОНЫ (слева→право вдоль верхней стены, потом центр, потом нижняя полоса):
                  [верхняя полоса, y=60..220]
                  A. Стеллажи книг     x=80..200,  y=60..220   (вдоль левой+верхней стены)
                  B. Мультстудия       x=200..370, y=60..220
                  C. Сем. чтение       x=370..530, y=60..220   (угол)
                  D. Игротека          x=530..880, y=60..220   (правый верхний угол)

                  [центр]
                  E. Читальный зал     x=200..700, y=220..420  (большая центральная зона)

                  [нижняя полоса, y=300..420, правая часть]
                  F. Сенсорная         x=700..800, y=220..340
                  G. Читалкин          x=700..880, y=340..420

                  [левая нижняя часть]
                  H. Библиотекарь      x=80..200,  y=220..420  (справа от входа)
              */}

              {/* ── Фон пола ── */}
              <rect x="80" y="60" width="800" height="360" fill="#f9fafb"/>

              {/* ── Сетка плитки ── */}
              {Array.from({length:31}).map((_,i)=>(
                <line key={`gv${i}`} x1={80+(i+1)*25} y1="60" x2={80+(i+1)*25} y2="420" stroke="#e5e7eb" strokeWidth="0.4"/>
              ))}
              {Array.from({length:13}).map((_,i)=>(
                <line key={`gh${i}`} x1="80" y1={60+(i+1)*25} x2="880" y2={60+(i+1)*25} stroke="#e5e7eb" strokeWidth="0.4"/>
              ))}

              {/* ══ СТЕНЫ ══ */}
              {/* Верхняя — глухая */}
              <rect x="77" y="57" width="806" height="6" fill="#1f2937"/>
              {/* Правая — глухая */}
              <rect x="877" y="57" width="6" height="366" fill="#1f2937"/>
              {/* Нижняя стена — 6 окон равномерно по всей длине */}
              {/* Стена: 800px / 6 окон = ~133px на секцию, окно 60px, простенок ~73px */}
              {/* Секции: простенок 36px | окно 60px | ... | простенок 37px */}
              {[0,1,2,3,4,5].map(i => {
                const wx = 80 + 16 + i * 133; // начало окна
                return (
                  <g key={`win${i}`}>
                    {/* простенок до окна */}
                    <rect x={i===0 ? 77 : wx-16} y="417" width={16} height="6" fill="#1f2937"/>
                    {/* окно */}
                    <rect x={wx} y="414" width="60" height="9" rx="1" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1.5"/>
                    {/* импост по центру */}
                    <line x1={wx+30} y1="414" x2={wx+30} y2="423" stroke="#38BDF8" strokeWidth="0.9"/>
                    {/* лучи света */}
                    <line x1={wx+15} y1="414" x2={wx+10} y2="390" stroke="#BAE6FD" strokeWidth="0.7" opacity="0.55"/>
                    <line x1={wx+45} y1="414" x2={wx+50} y2="390" stroke="#BAE6FD" strokeWidth="0.7" opacity="0.55"/>
                  </g>
                );
              })}
              {/* Правый простенок после последнего окна */}
              <rect x={80+16+5*133+60} y="417" width={880-(80+16+5*133+60)} height="6" fill="#1f2937"/>
              {/* Подпись */}
              <text x="480" y="436" textAnchor="middle" fontSize="8" fill="#0284C7">☀ 6 окон — равномерно по правой стене от входа</text>

              {/* Левая стена — с проёмом входа */}
              <rect x="77" y="57" width="6" height="155" fill="#1f2937"/>
              <rect x="77" y="265" width="6" height="158" fill="#1f2937"/>
              {/* Дуга открывания двери */}
              <path d="M83 212 Q120 212 120 265" fill="none" stroke="#374151" strokeWidth="1.5" strokeDasharray="5 3"/>
              <rect x="77" y="212" width="6" height="53" fill="#BAE6FD" opacity="0.3"/>
              {/* Подпись входа */}
              <text x="50" y="232" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1f2937">ВХОД</text>
              <text x="50" y="245" textAnchor="middle" fontSize="11" fill="#374151">⟶</text>

              {/* ══ ЗОНА A: СТЕЛЛАЖИ С КНИГАМИ (левый верхний угол) ══ */}
              <g style={{cursor:"default"}}>
                <rect x="83" y="63" width="117" height="157" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5"/>
                {[0,1,2,3,4,5].map(i=>(
                  <g key={`sh${i}`}>
                    <rect x="88" y={68+i*25} width="107" height="19" rx="2" fill="#FDE68A" stroke="#D97706" strokeWidth="0.8" opacity="0.85"/>
                    <line x1="88" y1={68+i*25+9} x2="195" y2={68+i*25+9} stroke="#B45309" strokeWidth="0.5"/>
                    {[0,1,2,3,4,5,6,7,8].map(j=>(
                      <rect key={j} x={90+j*12} y={69+i*25} width="10" height="7" rx="1"
                        fill={["#EF4444","#3B82F6","#10B981","#F59E0B","#8B5CF6","#EC4899","#6366F1","#14B8A6","#F97316"][j]}
                        opacity="0.75"/>
                    ))}
                  </g>
                ))}
                <text x="141" y="194" textAnchor="middle" fontSize="9" fontWeight="700" fill="#92400E">📚 Стеллажи</text>
                <text x="141" y="206" textAnchor="middle" fontSize="7.5" fill="#B45309">6 стеллажей с книгами</text>
              </g>

              {/* ══ ЗОНА B: МУЛЬТСТУДИЯ (верх, слева-центр) ══ */}
              <g onClick={()=>setActiveZone("multstudio")} style={{cursor:"pointer"}}>
                <rect x="200" y="63" width="170" height="157"
                  fill={activeZone==="multstudio"?"#FFEDD5":"#FFF7ED"}
                  stroke="#FF8C00" strokeWidth={activeZone==="multstudio"?2.5:1.5}/>
                {/* Экран на верхней стене */}
                <rect x="215" y="67" width="120" height="38" rx="3" fill="#FF8C00" opacity="0.15" stroke="#FF8C00" strokeWidth="1"/>
                <rect x="219" y="70" width="112" height="32" rx="2" fill="#FF8C00" opacity="0.2"/>
                <text x="275" y="90" textAnchor="middle" fontSize="7" fill="#7A3800">🖥 экран</text>
                {/* Столы */}
                <rect x="208" y="120" width="42" height="28" rx="3" fill="#FFD166" opacity="0.7" stroke="#FF8C00" strokeWidth="1"/>
                <rect x="262" y="120" width="42" height="28" rx="3" fill="#FFD166" opacity="0.7" stroke="#FF8C00" strokeWidth="1"/>
                <rect x="316" y="120" width="42" height="28" rx="3" fill="#FFD166" opacity="0.7" stroke="#FF8C00" strokeWidth="1"/>
                {[215,230,269,284,323,338].map((x,i)=>(
                  <circle key={i} cx={x} cy="158" r="6" fill="#FF8C00" opacity="0.3"/>
                ))}
                {/* Акустические панели (левая стена зоны) */}
                {[70,88,106,124,142,160].map((y,i)=>(
                  <rect key={i} x="200" y={y} width="4" height="12" rx="2" fill="#FF8C00" opacity="0.55"/>
                ))}
                <text x="285" y="107" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7A3800">🎬 Мультстудия</text>
                <text x="285" y="119" textAnchor="middle" fontSize="7.5" fill="#FF6B00">~14 м²</text>
                {activeZone==="multstudio"&&(
                  <rect x="200" y="63" width="170" height="157" fill="none" stroke="#FF8C00" strokeWidth="2.5" strokeDasharray="7 3" opacity="0.7"/>
                )}
              </g>

              {/* ══ ЗОНА C: СЕМЕЙНОЕ ЧТЕНИЕ (верх, центр — угол) ══ */}
              <g style={{cursor:"default"}}>
                <rect x="370" y="63" width="160" height="157" fill="#FFF1F2" stroke="#F43F5E" strokeWidth="1.5"/>
                {/* Диван П-образный */}
                <rect x="385" y="163" width="100" height="22" rx="7" fill="#FDA4AF" opacity="0.65" stroke="#F43F5E" strokeWidth="1"/>
                <rect x="385" y="130" width="22" height="55" rx="7" fill="#FDA4AF" opacity="0.6" stroke="#F43F5E" strokeWidth="1"/>
                <rect x="463" y="130" width="22" height="55" rx="7" fill="#FDA4AF" opacity="0.6" stroke="#F43F5E" strokeWidth="1"/>
                {/* Торшер */}
                <circle cx="508" cy="82" r="6" fill="#FCA5A5" opacity="0.5"/>
                <line x1="508" y1="88" x2="508" y2="100" stroke="#F43F5E" strokeWidth="1.5"/>
                <rect x="504" y="100" width="8" height="4" rx="1" fill="#F43F5E" opacity="0.5"/>
                {/* Ковёр */}
                <ellipse cx="437" cy="163" rx="40" ry="20" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                <text x="450" y="92" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#9F1239">🏠 Семейное</text>
                <text x="450" y="105" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#9F1239">чтение</text>
                <text x="450" y="118" textAnchor="middle" fontSize="7.5" fill="#E11D48">~12 м²</text>
              </g>

              {/* ══ ЗОНА D: ИГРОТЕКА (правый верхний угол) ══ */}
              <g onClick={()=>setActiveZone("gameroom")} style={{cursor:"pointer"}}>
                <rect x="530" y="63" width="347" height="157"
                  fill={activeZone==="gameroom"?"#DCFCE7":"#F0FDF4"}
                  stroke="#2E8B57" strokeWidth={activeZone==="gameroom"?2.5:1.5}/>
                {/* Стеллажи с играми у правой стены */}
                <rect x="867" y="67" width="10" height="149" rx="2" fill="#2E8B57" opacity="0.3"/>
                {[72,90,108,126,144,162,180].map((y,i)=>(
                  <rect key={i} x="857" y={y} width="20" height="10" rx="1" fill="#86EFAC" opacity="0.7"/>
                ))}
                {/* Маркерная верхняя стена */}
                <rect x="530" y="63" width="347" height="6" fill="#2E8B57" opacity="0.35"/>
                <text x="703" y="77" textAnchor="middle" fontSize="7" fill="#166534">маркерная стена</text>
                {/* Столы игровые */}
                {[0,1,2].map(col=>(
                  <g key={col}>
                    <rect x={545+col*95} y="100" width="70" height="40" rx="4" fill="#86EFAC" opacity="0.55" stroke="#2E8B57" strokeWidth="1"/>
                    {[553+col*95, 570+col*95, 587+col*95, 604+col*95].map((x,j)=>(
                      <circle key={j} cx={x} cy="151" r="7" fill="#2E8B57" opacity="0.22"/>
                    ))}
                    {[553+col*95, 570+col*95, 587+col*95, 604+col*95].map((x,j)=>(
                      <circle key={j} cx={x} cy="89" r="7" fill="#2E8B57" opacity="0.22"/>
                    ))}
                  </g>
                ))}
                <text x="700" y="170" textAnchor="middle" fontSize="11" fontWeight="700" fill="#14532D">🎮 Игротека</text>
                <text x="700" y="183" textAnchor="middle" fontSize="7.5" fill="#166534">~25 м²</text>
                {activeZone==="gameroom"&&(
                  <rect x="530" y="63" width="347" height="157" fill="none" stroke="#2E8B57" strokeWidth="2.5" strokeDasharray="7 3" opacity="0.7"/>
                )}
              </g>

              {/* ══ ЗОНА H: РАБОЧЕЕ МЕСТО БИБЛИОТЕКАРЯ (левый нижний — справа от входа) ══ */}
              <g style={{cursor:"default"}}>
                <rect x="83" y="220" width="117" height="197" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5"/>
                {/* Г-образный стол */}


                {/* Монитор */}
                <rect x="120" y="235" width="16" height="11" rx="1" fill="#2563EB" opacity="0.55"/>
                <rect x="126" y="246" width="4" height="3" rx="0" fill="#2563EB" opacity="0.3"/>
                {/* Кресло */}
                <circle cx="110" cy="292" r="10" fill="#93C5FD" opacity="0.55" stroke="#2563EB" strokeWidth="0.8"/>
                {/* Стойка выдачи книг */}
                <rect x="90" y="320" width="100" height="18" rx="4" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1"/>
                <text x="140" y="332" textAnchor="middle" fontSize="7" fill="#1E40AF">стойка выдачи</text>
                <text x="141" y="378" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#1E3A8A">🖥 Библиотекарь</text>
                <text x="141" y="390" textAnchor="middle" fontSize="7" fill="#2563EB">рабочее место</text>
              </g>

              {/* ══ ЗОНА E: ЧИТАЛЬНЫЙ ЗАЛ + МЕРОПРИЯТИЯ (центр) ══ */}
              <g style={{cursor:"default"}}>
                <rect x="200" y="220" width="500" height="197" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" strokeDasharray="7 3"/>
                {/* Сцена / экран для мероприятий — левая стена зоны */}
                <rect x="204" y="228" width="10" height="90" rx="3" fill="#475569" opacity="0.25" stroke="#64748B" strokeWidth="1"/>
                <text x="214" y="278" textAnchor="start" fontSize="7" fill="#475569" transform="rotate(-90,214,278)">сцена</text>
                {/* Столы — 4 ряда × 3 стола */}
                {[0,1,2,3].map(row=>(
                  [0,1,2].map(col=>(
                    <g key={`r${row}c${col}`}>
                      <rect x={230+col*150} y={235+row*44} width="110" height="26" rx="3"
                        fill="#CBD5E1" opacity="0.55" stroke="#94A3B8" strokeWidth="0.8"/>
                      {[0,1,2,3,4].map(s=>(
                        <circle key={s} cx={238+col*150+s*20} cy={270+row*44} r="6" fill="#94A3B8" opacity="0.35"/>
                      ))}
                    </g>
                  ))
                ))}
                <text x="450" y="408" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#334155">📖 Читальный зал и мероприятия</text>
                <text x="450" y="420" textAnchor="middle" fontSize="7.5" fill="#64748B">~40 м²</text>
              </g>

              {/* ══ ЗОНА F: СЕНСОРНАЯ КОМНАТА (правая сторона, верх) ══ */}
              <g onClick={()=>setActiveZone("sensory")} style={{cursor:"pointer"}}>
                <rect x="700" y="220" width="177" height="130"
                  fill={activeZone==="sensory"?"#EDE9FE":"#F5F3FF"}
                  stroke="#7B2FBE" strokeWidth={activeZone==="sensory"?2.5:1.5}/>
                {/* Пузырьковые колонны */}
                <rect x="712" y="230" width="13" height="80" rx="6" fill="#7B2FBE" opacity="0.18" stroke="#7B2FBE" strokeWidth="1"/>
                <rect x="730" y="230" width="13" height="80" rx="6" fill="#C4A8E8" opacity="0.25" stroke="#7B2FBE" strokeWidth="1"/>
                {/* Пуфы */}
                <circle cx="800" cy="278" rx="0" r="19" fill="#C4A8E8" opacity="0.4" stroke="#7B2FBE" strokeWidth="1"/>
                <circle cx="830" cy="285" r="13" fill="#7B2FBE" opacity="0.2"/>
                <circle cx="775" cy="290" r="12" fill="#C4A8E8" opacity="0.4"/>
                {/* Звёзды */}
                {[[755,224],[770,227],[790,223],[820,226],[845,224],[860,228]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="1.5" fill="#7B2FBE" opacity="0.7"/>
                ))}
                <text x="789" y="320" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4C1D95">✨ Сенсорная</text>
                <text x="789" y="333" textAnchor="middle" fontSize="7.5" fill="#5A1B9A">~8 м²</text>
                {activeZone==="sensory"&&(
                  <rect x="700" y="220" width="177" height="130" fill="none" stroke="#7B2FBE" strokeWidth="2.5" strokeDasharray="7 3" opacity="0.7"/>
                )}
              </g>

              {/* ══ ЗОНА G: ЗАЛ ЧИТАЛКИН (правая сторона, низ) ══ */}
              <g style={{cursor:"default"}}>
                <rect x="700" y="350" width="177" height="67" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.5"/>
                {/* Пуфы-подушки */}
                {[720,748,776,804,832,860].map((x,i)=>(
                  <circle key={i} cx={x} cy="378" r="12" fill="#FED7AA" opacity="0.75" stroke="#EA580C" strokeWidth="0.8"/>
                ))}
                {/* Низкий столик */}
                <rect x="715" y="394" width="150" height="10" rx="3" fill="#FDBA74" opacity="0.6" stroke="#EA580C" strokeWidth="0.8"/>
                <text x="789" y="408" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#9A3412">📕 Зал «Читалкин»</text>
              </g>

              {/* ══ РАЗМЕРНЫЕ ЛИНИИ ══ */}
              <line x1="80" y1="435" x2="880" y2="435" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="80" y1="431" x2="80" y2="439" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="880" y1="431" x2="880" y2="439" stroke="#9CA3AF" strokeWidth="1"/>
              <text x="480" y="448" textAnchor="middle" fontSize="9" fill="#6B7280">16 м</text>

              <line x1="48" y1="60" x2="48" y2="420" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="44" y1="60" x2="52" y2="60" stroke="#9CA3AF" strokeWidth="1"/>
              <line x1="44" y1="420" x2="52" y2="420" stroke="#9CA3AF" strokeWidth="1"/>
              <text x="36" y="243" textAnchor="middle" fontSize="9" fill="#6B7280" transform="rotate(-90,36,243)">7,2 м</text>

              <text x="480" y="472" textAnchor="middle" fontSize="10" fontWeight="600" fill="#374151">Общая площадь: 115,2 м²</text>

              {/* Стрелка «окна — правая стена от входа» */}
              <text x="697" y="452" textAnchor="middle" fontSize="8" fill="#0284C7">☀ 6 окон — правая стена от входа</text>
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