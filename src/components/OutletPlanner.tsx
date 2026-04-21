import { useState, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";

interface Outlet {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface OutletPlannerProps {
  zoneColor: string;
  zoneBgLight: string;
  zoneTitle: string;
}

const OUTLET_TYPES = [
  { label: "Розетка 220В", icon: "Zap", color: "#374151" },
  { label: "USB-розетка", icon: "Smartphone", color: "#2563EB" },
  { label: "Розетка 220В+USB", icon: "PlugZap", color: "#7C3AED" },
];

export default function OutletPlanner({ zoneColor, zoneBgLight, zoneTitle }: OutletPlannerProps) {
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [selectedType, setSelectedType] = useState(0);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState<string | null>(null);
  const planRef = useRef<SVGSVGElement>(null);

  const getSVGCoords = useCallback((e: React.MouseEvent) => {
    const svg = planRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const scaleX = 500 / rect.width;
    const scaleY = 300 / rect.height;
    return {
      x: Math.round((e.clientX - rect.left) * scaleX),
      y: Math.round((e.clientY - rect.top) * scaleY),
    };
  }, []);

  const handlePlanClick = useCallback((e: React.MouseEvent) => {
    if (dragging) return;
    const target = e.target as SVGElement;
    if (target.closest("[data-outlet]")) return;
    const { x, y } = getSVGCoords(e);
    const newOutlet: Outlet = {
      id: `outlet-${Date.now()}`,
      x,
      y,
      label: OUTLET_TYPES[selectedType].label,
    };
    setOutlets((prev) => [...prev, newOutlet]);
    setSelected(newOutlet.id);
  }, [dragging, selectedType, getSVGCoords]);

  const handleOutletMouseDown = useCallback((e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const { x, y } = getSVGCoords(e);
    const outlet = outlets.find((o) => o.id === id);
    if (!outlet) return;
    setDragging(id);
    setSelected(id);
    setDragOffset({ x: x - outlet.x, y: y - outlet.y });
  }, [outlets, getSVGCoords]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    const { x, y } = getSVGCoords(e);
    setOutlets((prev) =>
      prev.map((o) =>
        o.id === dragging
          ? { ...o, x: Math.max(14, Math.min(486, x - dragOffset.x)), y: Math.max(14, Math.min(286, y - dragOffset.y)) }
          : o
      )
    );
  }, [dragging, dragOffset, getSVGCoords]);

  const handleMouseUp = useCallback(() => {
    setDragging(null);
  }, []);

  const deleteOutlet = useCallback((id: string) => {
    setOutlets((prev) => prev.filter((o) => o.id !== id));
    if (selected === id) setSelected(null);
  }, [selected]);

  const clearAll = () => {
    setOutlets([]);
    setSelected(null);
  };

  const outletColor = (label: string) => {
    if (label.includes("USB") && label.includes("220")) return "#7C3AED";
    if (label.includes("USB")) return "#2563EB";
    return "#374151";
  };

  return (
    <div className="rounded-3xl overflow-hidden border-2" style={{ borderColor: zoneColor, backgroundColor: zoneBgLight }}>
      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: zoneColor }}>
            <Icon name="PlugZap" size={16} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm">План розеток — {zoneTitle}</div>
            <div className="text-xs text-gray-500">Кликните на плане, чтобы добавить · Перетащите для перемещения</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full text-white" style={{ backgroundColor: zoneColor }}>
            {outlets.length} шт.
          </span>
          {outlets.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
            >
              Очистить
            </button>
          )}
        </div>
      </div>

      {/* Type selector */}
      <div className="px-5 pb-3 flex gap-2 flex-wrap">
        {OUTLET_TYPES.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setSelectedType(i)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium border transition-all ${
              selectedType === i
                ? "text-white border-transparent shadow"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
            style={selectedType === i ? { backgroundColor: t.color, borderColor: t.color } : {}}
          >
            <Icon name={t.icon} size={12} />
            {t.label}
          </button>
        ))}
      </div>

      {/* SVG Plan */}
      <div className="px-5 pb-5">
        <svg
          ref={planRef}
          viewBox="0 0 500 300"
          className="w-full rounded-2xl border border-gray-200 bg-white select-none"
          style={{ cursor: dragging ? "grabbing" : "crosshair", touchAction: "none" }}
          onClick={handlePlanClick}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Room outline */}
          <rect x="10" y="10" width="480" height="280" rx="8" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="2"/>

          {/* Grid */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={60 + i * 48} y1="10" x2={60 + i * 48} y2="290" stroke="#E5E7EB" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h${i}`} x1="10" y1={60 + i * 50} x2="490" y2={60 + i * 50} stroke="#E5E7EB" strokeWidth="0.5" />
          ))}

          {/* Room label */}
          <text x="250" y="32" textAnchor="middle" fontSize="11" fill="#9CA3AF" fontWeight="500">
            {zoneTitle} — план помещения
          </text>

          {/* Walls hint */}
          <rect x="10" y="10" width="480" height="280" rx="8" fill="none" stroke={zoneColor} strokeWidth="3" opacity="0.25"/>

          {/* Door hint */}
          <line x1="10" y1="200" x2="10" y2="260" stroke="#D1D5DB" strokeWidth="4"/>
          <path d="M10 200 Q40 200 40 230" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="3 2"/>
          <text x="22" y="275" fontSize="8" fill="#9CA3AF">вход</text>

          {/* Outlets */}
          {outlets.map((outlet) => {
            const color = outletColor(outlet.label);
            const isSel = selected === outlet.id;
            return (
              <g
                key={outlet.id}
                data-outlet="true"
                transform={`translate(${outlet.x}, ${outlet.y})`}
                style={{ cursor: dragging === outlet.id ? "grabbing" : "grab" }}
                onMouseDown={(e) => handleOutletMouseDown(e, outlet.id)}
                onClick={(e) => { e.stopPropagation(); setSelected(outlet.id); }}
              >
                {isSel && (
                  <circle r="16" fill={color} opacity="0.15" />
                )}
                <circle r="11" fill={color} />
                <circle r="9" fill="white" opacity="0.15" />
                {/* Socket symbol */}
                <circle cx="-3" cy="0" r="2" fill="none" stroke="white" strokeWidth="1.5"/>
                <circle cx="3" cy="0" r="2" fill="none" stroke="white" strokeWidth="1.5"/>
                <line x1="0" y1="-5" x2="0" y2="-8" stroke="white" strokeWidth="1" opacity="0.7"/>

                {/* Label */}
                <rect x="-22" y="13" width="44" height="13" rx="4" fill={color} opacity="0.9"/>
                <text y="22" textAnchor="middle" fontSize="7" fill="white" fontWeight="600">
                  {outlet.label.replace("Розетка ", "").replace("-розетка", "")}
                </text>

                {/* Delete on select */}
                {isSel && (
                  <g
                    onClick={(e) => { e.stopPropagation(); deleteOutlet(outlet.id); }}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx="12" cy="-12" r="7" fill="#EF4444"/>
                    <line x1="9" y1="-15" x2="15" y2="-9" stroke="white" strokeWidth="1.5"/>
                    <line x1="15" y1="-15" x2="9" y2="-9" stroke="white" strokeWidth="1.5"/>
                  </g>
                )}
              </g>
            );
          })}

          {/* Empty hint */}
          {outlets.length === 0 && (
            <text x="250" y="165" textAnchor="middle" fontSize="13" fill="#D1D5DB">
              Кликните, чтобы добавить розетку
            </text>
          )}
        </svg>

        {/* Legend */}
        <div className="mt-3 flex gap-4 flex-wrap">
          {OUTLET_TYPES.map((t) => (
            <div key={t.label} className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color }}/>
              <span className="text-xs text-gray-500">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
