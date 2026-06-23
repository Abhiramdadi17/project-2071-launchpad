import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const SERVICES_GROUPS = [
  {
    heading: "AI & Data",
    items: [
      { label: "Agentic Intelligence", href: "/agentic-intelligence" },
      { label: "AI Optimization", href: "/decision-intelligence" },
      { label: "Predictive Analytics", href: "/predictive-analytics" },
      { label: "Data Engineering", href: "/enterprise-data-engineering" },
    ],
  },
  {
    heading: "SAP Services",
    items: [
      { label: "SAP Analytics", href: "/sap-analytics-power-bi" },
      { label: "SAP RISE", href: "/sap-rise-implementation" },
      { label: "SAP IBP", href: "/sap-ibp" },
      { label: "SAP EWM", href: "/sap-ewm" },
      { label: "SAP SCF", href: "/sap-supply-chain-finance" },
      { label: "App Support", href: "/sap-application-support" },
    ],
  },
  {
    heading: "Manufacturing",
    items: [
      { label: "Shopfloor Digital Apps", href: "/shopfloor-digital-apps" },
      { label: "Condition Monitoring", href: "/condition-monitoring" },
      { label: "Vision Analytics", href: "/vision-analytics" },
      { label: "Power Platform", href: "/microsoft-power-platform" },
    ],
  },
];

const MORE_GROUPS = [
  {
    heading: "Products",
    items: [
      { label: "SFx9 MES", href: "/sfx9-mes" },
      { label: "Factory Finite Scheduling", href: "/factory-finite-scheduling" },
      { label: "InventIQ", href: "/inventiq" },
      { label: "ShopFloor Digital Apps", href: "/shopfloor" },
    ],
  },
  {
    heading: "Insights",
    items: [
      { label: "All Insights & Events", href: "/insights-events" },
    ],
  },
];

type PanelPos = { top: number; left: number; right: number; nearRight: boolean };

type Props = {
  type: "services" | "more";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function ExplorePanel({ type, children, className, style }: Props) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<PanelPos>({ top: 0, left: 0, right: 0, nearRight: false });

  const calcPos = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const mid = r.left + r.width / 2;
    const nearRight = mid > window.innerWidth * 0.6;
    setPos({
      top: r.bottom + 8,
      left: mid,
      right: window.innerWidth - r.right,
      nearRight,
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    calcPos();
    window.addEventListener("scroll", calcPos, true);
    window.addEventListener("resize", calcPos);
    return () => {
      window.removeEventListener("scroll", calcPos, true);
      window.removeEventListener("resize", calcPos);
    };
  }, [open, calcPos]);

  useEffect(() => {
    if (!open) return;
    const onMouse = (e: MouseEvent) => {
      if (
        !panelRef.current?.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node)
      )
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const groups = type === "services" ? SERVICES_GROUPS : MORE_GROUPS;
  const cols = type === "services" ? "grid-cols-3" : "grid-cols-2";

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={className}
        style={style}
      >
        {children}
        <ChevronDown
          size={11}
          className="inline-block ml-1 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease }}
            style={{
              position: "fixed",
              top: pos.top,
              zIndex: 9999,
              ...(pos.nearRight
                ? { right: pos.right }
                : { left: pos.left, transform: "translateX(-50%)" }),
            }}
            className={`bg-[#0F0F0A] border border-white/[0.09] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] p-6 ${
              type === "services" ? "min-w-[580px]" : "min-w-[340px]"
            }`}
          >
            <div className={`grid gap-8 ${cols}`}>
              {groups.map((g) => (
                <div key={g.heading}>
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-3">
                    {g.heading}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {g.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-[13px] text-white/70 hover:text-[#C8FF01] transition-colors leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
