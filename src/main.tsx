import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config"; // Initialize i18n

const savedLang = localStorage.getItem('i18nextLng') || 'en';
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

// Performance Budget & Monitoring
const BUDGET = {
    LCP: 2500, // 2.5s
    CLS: 0.1,
    FCP: 1800,
    INP: 200,
};

if (process.env.NODE_ENV === 'development') {
    import('web-vitals').then(({ onLCP, onFCP, onCLS, onINP }) => {
        const logMetric = ({ name, value }: { name: string, value: number }) => {
            const color = value > (BUDGET as any)[name] ? 'color: #ef4444; font-weight: bold' : 'color: #10b981';
            console.log(`[Perf Budget] %c${name}: ${value.toFixed(2)}${name === 'CLS' ? '' : 'ms'}`, color);
        };

        onLCP(logMetric);
        onCLS(logMetric);
        onFCP(logMetric);
        onINP(logMetric);
    });
}

createRoot(document.getElementById("root")!).render(<App />);

// Dispatch custom event for the global loader logic in index.html
window.dispatchEvent(new CustomEvent('react-mounted'));
