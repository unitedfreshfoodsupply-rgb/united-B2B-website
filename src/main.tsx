import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config"; // Initialize i18n

const savedLang = localStorage.getItem('i18nextLng') || 'en';
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

createRoot(document.getElementById("root")!).render(<App />);
