import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { captureUtmParams } from "@/lib/utm";

captureUtmParams();
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
