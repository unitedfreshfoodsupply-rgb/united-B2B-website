import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SeasonalArcProps {
    data: number[]; // 12-month availability array (0=off, 1=available, 2=peak)
    currentMonth: number;
    compact?: boolean;
}

export function SeasonalArc({ data, currentMonth, compact = false }: SeasonalArcProps) {
    const { i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";

    const width = compact ? 200 : 300;
    const height = compact ? 40 : 60;
    const padding = 4;
    const barWidth = (width - padding * 13) / 12;
    const maxHeight = height - padding * 2;

    return (
        <div className="relative" style={{ width, height }}>
            <svg width={width} height={height} className="overflow-visible">
                {/* Background grid */}
                <line
                    x1={padding}
                    y1={height / 2}
                    x2={width - padding}
                    y2={height / 2}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border opacity-30"
                />

                {/* Availability bars */}
                {data.map((value, index) => {
                    // In RTL, we start from the right side for the first month
                    const xIndex = isRTL ? (11 - index) : index;
                    const x = padding + xIndex * (barWidth + padding);

                    const barHeight = (value / 2) * maxHeight;
                    const y = height - padding - barHeight;
                    const isCurrentMonth = index === currentMonth;

                    return (
                        <g key={index}>
                            {/* Bar */}
                            <motion.rect
                                x={x}
                                y={y}
                                width={barWidth}
                                height={barHeight}
                                className={`
                  ${value === 2 ? "fill-accent" : ""}
                  ${value === 1 ? "fill-accent/40" : ""}
                  ${value === 0 ? "fill-muted" : ""}
                  ${isCurrentMonth ? "opacity-100" : "opacity-70"}
                `}
                                rx={2}
                                initial={{ height: 0, y: height - padding }}
                                animate={{ height: barHeight, y }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            />

                            {/* Current month indicator */}
                            {isCurrentMonth && (
                                <>
                                    <circle
                                        cx={x + barWidth / 2}
                                        cy={y - 6}
                                        r={3}
                                        className="fill-accent animate-pulse"
                                    />
                                    <line
                                        x1={x + barWidth / 2}
                                        y1={0}
                                        x2={x + barWidth / 2}
                                        y2={height}
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        className="text-accent opacity-30"
                                        strokeDasharray="2,2"
                                    />
                                </>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Tooltip on hover */}
            {!compact && (
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-1">
                    {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((month, i) => (
                        <span
                            key={i}
                            className={`text-[10px] ${i === currentMonth ? "text-accent font-bold" : "text-muted-foreground"}`}
                        >
                            {month}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
